const mongoose = require("mongoose");
const categorySchema = mongoose.Schema(
  {
    catgory: {
      type: String,
      trim: true,
      enum: ["romance", "action", "horror", "short stories", "cookbooks"],
      required: true,
    },
  },
  { timestamps: true }
);
const cat = mongoose.model("category", categorySchema);
module.exports = cat;
