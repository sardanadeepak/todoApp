const express = require("express");
cors = require('cors')
const { createTodoSchema, updateTodoSchema } = require("./types");
const app = express()
const { todo } = require("./db");
const PORT = 3000;
app.use(cors())
app.use(express.json())


app.post("/todo", async function (req, res) {
    const createPayload = req.body
    const parsePayload = createTodoSchema.safeParse(createPayload)
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the worng inputs"
        })
        return;
    }

    // put in database
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created"
    })

})

app.get("/todos", async function (req, res) {

    const todos = await todo.find({})
    res.json({
        todos
    })

})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body
    const parsePayload = updateTodoSchema.safeParse(updatePayload)
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        })
        return;
    }
    // update todo

    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo Updated"
    })

})

app.listen(PORT, (error) => {
    if (!error) {
        console.log('App is running on PORT ', PORT)
    }
    else {
        console.log(' Error Starting server')
    }

})