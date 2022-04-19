import { TaskTypes, TaskQuery, TaskMutation, TaskSubscription } from "./task";
import { UserTypes, UserQuery, UserMutation, UserSubscription } from "./user";

import { gql } from "apollo-server-express";

// remember we only use gql in this file. types in other files are just simple strings
export const typeDefs = gql`
  type Query
  type Mutation
  ${TaskTypes}
  ${UserTypes}
`;

export const resolvers = {
  Query: {
    ...TaskQuery,
    ...UserQuery
  },
  Mutation: {
    ...TaskMutation,
    ...UserMutation
  },
  Subscription: {
    ...TaskSubscription,
    ...UserSubscription
  },
};
