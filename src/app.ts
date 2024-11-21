import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import courseRoutes from './routers/course';

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/siteEducacional')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Middleware para interpretar JSON
app.use(bodyParser.json());

// Rota para a API de cursos
app.use('/api/courses', courseRoutes);

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Rota para a página de cursos
app.get('/courses.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/courses.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
