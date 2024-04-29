const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor Rodando!');
});

mongoose.connect('mongodb://localhost:27017/BancotNovo')
    .then(() => {
        console.log('Conexão com o MongoDB estabelecida com sucesso');
    })
    .catch(err => {
        console.log('Falha ao Conectar com o MongoDB', err.message);
    });

app.use('/api', userRoutes);
app.use('/api', taskRoutes);
app.use('/api', categoryRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
