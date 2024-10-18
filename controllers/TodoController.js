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

module.exports.updateTodo = async (req,res) => {
    const {_id,text} = req.body;
    TodoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.set(201).send("Update Success!"))
    .catch((err) => console.log(err))
};

module.exports.deleteTodo = async (req,res) => {
    const {_id} = req.body;
    TodoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Delete Success!"))
    .catch((err) => console.log(err))
};

