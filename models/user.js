const mongoose = require("mongoose");
const uniquevALIDATOR = require("mongoose-unique-validator");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: "string",
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: "string",
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

userSchema.plugin(uniquevALIDATOR,{ message: "email alread exisits" });

module.exports = mongoose.model("User", userSchema);