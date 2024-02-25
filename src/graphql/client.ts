import { ApolloClient, InMemoryCache } from "@apollo/client";

import { consts } from "../config";

export const client = new ApolloClient({
  uri: consts.serverUrl,
  cache: new InMemoryCache(),
});
