const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },

  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  }
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;