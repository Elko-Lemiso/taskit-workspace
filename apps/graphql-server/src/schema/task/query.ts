import cote from "cote";
const requester = new cote.Requester({
  name: "graphqlServer",
  namespace: "graphql",
});

export const TaskQuery = {

  task: (parent, args, context) => {
    requester.send({ type: "get.task", query: args });
    const x = {
      id: 1234,
      title: "String",
      category: "String",
      label: "String",
    };
    return x;
  },

  tasks: (parent, args) => {
    requester.send({ type: "get.tasks", query: args });
    const x = [
      {
        id: 1234,
        title: "String",
        category: "String",
        label: "String",
      },
      {
        id: 1234,
        title: "String",
        category: "String",
        label: "String",
      },
    ];
    return x;
  },
  
};
