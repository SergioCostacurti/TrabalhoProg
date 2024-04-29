const Task = require('/models/Task'); 

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('user');  
        res.json(tasks);
    } catch (error) {
        res.status(500).send({ message: 'Erro puxando tarefas', error: error.toString() });
    }
};

exports.createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).send({ message: 'Erro ao criar tarefa', error: error.toString() });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).send({ message: 'Tarefa não encontrada' });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).send({ message: 'Erro atualizando tarefas', error: error.toString() });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).send({ message: 'Tarefa não encontrada' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ message: 'Erro na tentativa de deletar tarefa', error: error.toString() });
    }
};
