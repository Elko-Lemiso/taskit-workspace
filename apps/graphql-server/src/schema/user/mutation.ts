import cote from "cote";

const requester = new cote.Requester({
  name: "graphqlServer",
  namespace: "graphql",
});

export const UserMutation = {
  createUser: (parent, args) => {
    requester
      .send({ type: "create.user", query: args })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateUser: (parent, args) => {
    // whatever
  },
  
  deleteTask: (parent, args) => {
    // whatever
  },
};
 
