import { User } from "../schemas";
import mongoose from "mongoose";

export const userHandler = {
  createUser: async (req, ret) => {
    const newUser = new User({
      ...req.data,
    });
    newUser
      .save()
      .then((doc) => {
        ret({ status: 200, data: doc });
      })
      .catch((err) => console.log(err));
  },

  updateUser: async (req, ret) => {
    await User.updateOne({ _id: req._id }, { $set: req.data }, function (
      err,
      data
    ) {
      ret({ type: 200, data: data });
    });
  },

  getUser: async (req, ret) => {
    const allUsers = await User.find({ _id: req._id }); // Make sure to use await
    console.log(allUsers);
  },

  getAllUsers: async (req, ret) => {
    const allUsers = await User.find(); // Make sure to use await
    console.log(allUsers);
  },
};
