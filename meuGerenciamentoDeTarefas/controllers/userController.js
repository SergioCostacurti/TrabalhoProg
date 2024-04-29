const User = require('/models/User');  

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send({ message: 'Erro', error: error.toString() });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).send({ message: 'Erro criando usuário', error: error.toString() });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).send({ message: 'Usuário não foi encontrado' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).send({ message: 'Erro ao atualizar usuário', error: error.toString() });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).send({ message: 'Usuário não foi encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ message: 'Usuário não foi deletado', error: error.toString() });
    }
};
