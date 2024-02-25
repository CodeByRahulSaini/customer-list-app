import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Query = {
  __typename?: "Query";
  getZellerCustomer?: Maybe<ZellerCustomer>;
  listZellerCustomers?: Maybe<ZellerCustomerConnection>;
};

export type QueryGetZellerCustomerArgs = {
  id: Scalars["String"]["input"];
};

export type QueryListZellerCustomersArgs = {
  filter?: InputMaybe<TableZellerCustomerFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type TableStringFilterInput = {
  beginsWith?: InputMaybe<Scalars["String"]["input"]>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  ge?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  le?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  notContains?: InputMaybe<Scalars["String"]["input"]>;
};

export type TableZellerCustomerFilterInput = {
  email?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableStringFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  role?: InputMaybe<TableStringFilterInput>;
};

export type ZellerCustomer = {
  __typename?: "ZellerCustomer";
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
};

export type ZellerCustomerConnection = {
  __typename?: "ZellerCustomerConnection";
  items?: Maybe<Array<Maybe<ZellerCustomer>>>;
  nextToken?: Maybe<Scalars["String"]["output"]>;
};

export type ListZellerCustomersQueryVariables = Exact<{
  filter?: InputMaybe<TableZellerCustomerFilterInput>;
}>;

export type ListZellerCustomersQuery = {
  __typename?: "Query";
  listZellerCustomers?: {
    __typename?: "ZellerCustomerConnection";
    items?: Array<{
      __typename?: "ZellerCustomer";
      id: string;
      name?: string | null;
      role?: string | null;
    } | null> | null;
  } | null;
};

export const ListZellerCustomersDocument = gql`
  query ListZellerCustomers($filter: TableZellerCustomerFilterInput) {
    listZellerCustomers(filter: $filter) {
      items {
        id
        name
        role
      }
    }
  }
`;

/**
 * __useListZellerCustomersQuery__
 *
 * To run a query within a React component, call `useListZellerCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListZellerCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListZellerCustomersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useListZellerCustomersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListZellerCustomersQuery,
    ListZellerCustomersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ListZellerCustomersQuery,
    ListZellerCustomersQueryVariables
  >(ListZellerCustomersDocument, options);
}
export function useListZellerCustomersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListZellerCustomersQuery,
    ListZellerCustomersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ListZellerCustomersQuery,
    ListZellerCustomersQueryVariables
  >(ListZellerCustomersDocument, options);
}
export function useListZellerCustomersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ListZellerCustomersQuery,
    ListZellerCustomersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ListZellerCustomersQuery,
    ListZellerCustomersQueryVariables
  >(ListZellerCustomersDocument, options);
}
export type ListZellerCustomersQueryHookResult = ReturnType<
  typeof useListZellerCustomersQuery
>;
export type ListZellerCustomersLazyQueryHookResult = ReturnType<
  typeof useListZellerCustomersLazyQuery
>;
export type ListZellerCustomersSuspenseQueryHookResult = ReturnType<
  typeof useListZellerCustomersSuspenseQuery
>;
export type ListZellerCustomersQueryResult = Apollo.QueryResult<
  ListZellerCustomersQuery,
  ListZellerCustomersQueryVariables
>;
