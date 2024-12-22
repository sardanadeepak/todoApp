const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config()
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9ekt417.mongodb.net/TodoApp`

mongoose.connect(connectionString)

const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean,

})

const todo = mongoose.model("todos", todoSchema)
module.exports = {
    todo
}