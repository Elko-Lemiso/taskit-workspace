export const UserTypes = `
    type User {
      id: ID
      email: String
      firstName: String
      lastName: String
    }
    
    input UserInput {
        email: String
        firstName: String
        lastName: String
    }

    extend type Query {
      user: User
      users: [User]
    }

    extend type Mutation {
      createUser(data: UserInput!): User
      updateUser(id:ID, data: UserInput!): User 
      deleteUser(id: ID): Boolean
    }

    type Subscription{
      subscribeUsers: [User]
    }
`;
