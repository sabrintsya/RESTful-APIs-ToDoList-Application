const TodoModel = require('../models/TodoModel');

module.exports.getTodo = async (req, res) => {
    const Todo = await TodoModel.find();
    res.send(Todo);
};

module.exports.saveTodo = async (req, res) => {
    const { text } = req.body;

    TodoModel
        .create({ text })  // Corrected from creat to create
        .then((Data) => {
            console.log("Add Success!");
            console.log(Data);
            res.send(Data);
        })
        .catch(err => {
            console.error("Error saving todo:", err);
            res.status(500).send("Error saving todo");
        });
};