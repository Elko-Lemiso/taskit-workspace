import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
});

export const User = model("User", UserSchema);
