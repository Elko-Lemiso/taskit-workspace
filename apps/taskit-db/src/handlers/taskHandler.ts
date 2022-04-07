import { Task } from "../schemas";
import mongoose from "mongoose";
export const taskHandler = {
  createTask: async (req, cb) => {
    const newTask = new Task({
      title: req.query.data.title,
      category: req.query.data.category,
      labels: req.query.data.labels,
      owner: new mongoose.Types.ObjectId(),
    });

    newTask
      .save()
      .then((doc) => {
        cb({ status: 200, data: doc });
      })
      .catch((err) => console.log(err));
  },

  updateTask: async (parent, args) => {},

  getTask: async (req, cb) => {
    const allUsers = await Task.find({ _id: req._id }); // Make sure to use await
    console.log(allUsers);
  },

  getAllTasks: async (req, cb) => {
    const allUsers = await Task.find(); // Make sure to use await
    console.log(allUsers);
  },
};
