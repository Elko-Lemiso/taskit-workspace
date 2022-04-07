import cote from "cote";

const requester = new cote.Requester({
  name: "graphqlServer",
  namespace: "graphql",
});

export const TaskMutation = {
  createTask: (parent, args) => {
    requester
      .send({ type: "create.task", query: args })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateTask: (parent, args) => {
    // whatever
  },
  deleteTask: (parent, args) => {
    // whatever
  },
};
