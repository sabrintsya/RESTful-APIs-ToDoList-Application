const TodoModel = require('../models/TodoModel'); // Ensure this is the correct model

module.exports = {
getTodo : async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.send(todos);
    } catch (error) {
        console.error("Error dalam mengambil todos:", error);
        res.status(500).send("Error dalam mengambil todos");
    }
},
createTodo : async (req, res) => {
    try {
        const { userId, title } = req.body; // Extract userId and title from request body
        if (!userId || !title) {
            return res.status(400).json({ message: 'userId and title are required' });
        }

        const newTodo = new Todo({
            userId,
            title
        });

        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        console.error('Error saat save todo:', error);
        res.status(500).json({ message: 'Error saat create todo' });
    }
},
getAllTodo : async (req, res) => {
      const data = await Todo.find({});
  
      res.status(200).json({
        message: "Data berhasil ditemukan",
        data,
      });
    },
saveTodo : async (req, res) => {
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
    },
updateTodo : async (req, res) => {
    const { _id, text } = req.body;
    try {
        await TodoModel.findByIdAndUpdate(_id, { text });
        res.status(200).send("Update Success!");
    } catch (error) {
        console.error("Error saat update todo:", error);
        res.status(500).send("Error saat update todo");
    }
},
deleteTodo : async (req, res) => {
    try{
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
        return res.status(404).json({
          message: "Data tidak ditemukan",
        });
    }

    res.status(200).json({
      message: "Data berhasil dihapus",
    });

    }catch(error){
       res.status(500).json({
         message: "Terjadi kesalahan saat menghapus data",
         error: error.message,
       });
    }  
  },
  deleteAllTodo: async (req, res) => {
    await Todo.deleteMany({});

    res.status(200).json({
      message: "Semua data todo berhasil dihapus",
    });
  },
};