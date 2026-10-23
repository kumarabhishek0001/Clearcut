import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: [true, "clerkId is required"],
    unique: [true, "clerkId should be unique"],
  },

  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email should be unique"],
  },

  photo: {
    type: String,
  },

  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },

  creditBalance: {
    type: Number,
    default: 5,
  },
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;
