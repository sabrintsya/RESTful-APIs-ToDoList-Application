const TodoModel = require('../models/TodoModel')

module.exports.getTodo = async (req, res) => {
    const Todo = await TodoModel.find()
    res.send(Todo)
}

module.exports.saveTodo =  async (req, res) => {
    const { text } = req.body

    TodoModel
    .creat({text})
    .then((Data) => {
        console.log("Add Success!");
        console.log(Data);
        res.send(Data)
    })
}