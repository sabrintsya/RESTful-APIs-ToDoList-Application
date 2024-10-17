const moongoose = require ('monggose')

const todoSchema = new moongoose.Schema({
    text : {
        type: string,
        require: true
    }
})

module.exports = mongoose.model('Todo', todoSchema)