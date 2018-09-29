const mongoose = require("mongoose");

const Schema = mongoose.Schema;
var date = new Date();
var formattedDate = date.toDateString();

const ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Article Title is Required"
  },

  date: {
    type: String,
    default: formattedDate,
    required: "Date is Required"
  },

  url: {
    type: String,
    trim: true,
    required: "External URL is Required" 
  }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;


