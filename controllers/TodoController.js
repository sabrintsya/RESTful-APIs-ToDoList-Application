const TodoModel = require('../models/TodoModel')

module.exports.getTodo = async (req, res) => {
    const Todo = await TodoModel.find()
    res.send(Todo)
}