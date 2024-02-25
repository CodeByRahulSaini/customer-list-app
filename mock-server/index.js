import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchema } from "@graphql-tools/load";
import { addMocksToSchema } from "@graphql-tools/mock";

import { listZellerCustomers } from "./queries/listZellerCustomers.js";
import { getZellerCustomer } from "./queries/getZellerCustomer.js";

const schema = await loadSchema("schema.gql", {
  loaders: [new GraphQLFileLoader()],
});

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema,
    resolvers: {
      Query: {
        listZellerCustomers: (req, data) => {
          let customers = [...listZellerCustomers.items];
          // throw new Error("Server is down! Try again later");
          let i = 0;
          while (i < 1000000000) {
            i++;
          }
          if (data.filter.role) {
            customers = customers.filter((o) => o.role === data.filter.role.eq);
          }
          if (data.filter.name) {
            customers = customers.filter((o) =>
              o.name.includes(data.filter.name.contains)
            );
          }

          return { items: customers };
        },
        getZellerCustomer: () => getZellerCustomer,
      },
    },
  }),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 9002 },
});

// eslint-disable-next-line no-console
console.log(`🚀 Server is using is listening at ${url}`);
