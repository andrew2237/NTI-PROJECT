const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate(val) {
        if (!validator.isEmail(val)) throw new Error("invalid email format");
      },
    },
    password: {
      type: String,
    },
    otp: {
      type: String,
    },
    userType: {
      type: String,
      enum: ["admin", "user"],
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);
userSchema.pre("save", async function () {
  if (this.isModified("password"))
    this.password = await bcryptjs.hash(
      this.password,
      parseInt(process.env.salt)
    );
});
userSchema.statics.login = async (email, password) => {
  const userData = await user.findOne({ email });
  if (!userData) throw new Error("ivalid email");
  const isValid = bcryptjs.compare(password, userData.password);
  if (!isValid) throw new Error("invalid password");
  return userData;
};
userSchema.methods.generateToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWTKEY);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

const user = mongoose.model("users", userSchema);
module.exports = user;
