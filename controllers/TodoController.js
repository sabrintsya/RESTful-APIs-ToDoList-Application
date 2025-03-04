const Todo = require("../models/TodoModel");

module.exports = {
  getAllTodo: async (req, res) => {
    const data = await Todo.find({});

    res.status(200).json({
      message: "Data berhasil ditemukan",
      data,
    });
  },
  getTodoById: async (req, res) => {
    try{
      const { id } = req.params;
      const getDataById = await Todo.findById(id).exec();
 
       if (!getDataById) {
         return res.status(404).json({
           message: "Data tidak ditemukan",
         });
       }

      res.status(200).json({
        message: "1 Data todo berhasil ditemukan",
        data: getDataById,
      });

    }catch(error){
      res.status(500).json({
        message: "Error saat menghapus data",
        error: error.message,
      });
    }
  },
  addTodo: (req, res) => {
    const data = req.body;

    const newTodo = new Todo(data); //Model.init() --> pertama kali
    newTodo.save();

    res.status(201).json({
      message: "Data berhasil ditambahkan",
    });
  },
  editTodoById: async (req, res) => {
   try{
      const data = req.body;
      const { id } = req.params;

      data.updatedAt = Date.now();
      const updatedData = await Todo.findByIdAndUpdate(id, data, { new: true });
      
       if (!updatedData) {
         return res.status(404).json({
           message: "Data tidak ditemukan",
         });
       }

      res.status(200).json({
        message: "Data berhasil diubah",
        data: updatedData,
      });

    }catch(error){
      res.status(500).json({
        message: "Error saat menghapus data",
        error: error.message,
      });
    }
    
  },
  deleteTodoById: async (req, res) => {
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
         message: "Error saat menghapus data",
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
