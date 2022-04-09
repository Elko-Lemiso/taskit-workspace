import { Task } from "../schemas";
import mongoose from "mongoose";
export const taskHandler = {

  createTask: async (req, ret) => {
    const newTask = new Task({
      title: req.data.title,
      category: req.data.category,
      labels: req.data.labels,
      owner: new mongoose.Types.ObjectId(),
    });
    newTask
      .save()
      .then((doc) => {
        ret({ status: 200, data: doc });
      })
      .catch((err) => console.log(err));
  },

  updateTask: async (req, ret) => {
      await Task.updateOne(
        { _id: req._id },
        { $set: req.data },
        function (err, data) {
          ret({ type: 200, data: data });
        }
      );
  },

  getTask: async (req, ret) => {
    const allUsers = await Task.find({ _id: req._id }); // Make sure to use await
    console.log(allUsers);
  },

  getAllTasks: async (req, ret) => {
    const allUsers = await Task.find(); // Make sure to use await
    console.log(allUsers);
  },
};
