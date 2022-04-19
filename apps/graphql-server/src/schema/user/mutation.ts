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
    requester
      .send({ type: "update.user", query: args })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteTask: (parent, args) => {
    requester
      .send({ type: "delete.user", query: args })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
