export const TaskTypes = `
    type Task {
      id: ID
      title: String
      category: String
      labels: [String]
      applicants: [User]
      owner: String
    }
    
    input TaskInput {
      title: String
      category: String
      labels: [String]
      applicants: [UserInput]
      owner: String
    }

    extend type Query {
      task(id:ID!): Task
      tasks: [Task]
    }

    extend type Mutation {
      createTask(data: TaskInput!): Task
      updateTask(id:ID, data: TaskInput!): Task 
      deleteTask(id: ID): Boolean
    }

    type Subscription{
      subscribeTasks: [Task]
    }
`;
