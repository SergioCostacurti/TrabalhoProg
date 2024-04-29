const mongoose = require ('mongoose');

const TaskSchema = new mongoose.schema({
    tutulo: {type: String, require: true },
    descricao: {type: String},
    datacriacao: {type: Date, default: Date.now},
    dataconclusao: {type: Date},
    tipo: {type: String, require: true},
    status: {type: String, enum: ['pendente', 'em progresso', 'completo'], default: 'pendente'},
    user: {type: mongoose.schema.types.objectId}
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;