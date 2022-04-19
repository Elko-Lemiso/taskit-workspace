import cote from "cote";
const requester = new cote.Requester({
  name: "graphqlServer",
  namespace: "graphql",
});

export const UserQuery = {

  user: (parent, args, context) => {
    requester.send({ type: "get.user", query: args });
    const x = {
      id: 1234,
      title: "String",
      category: "String",
      label: "String",
    };
    return x;
  },

  users: (parent, args) => {
    requester.send({ type: "get.users", query: args });
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
