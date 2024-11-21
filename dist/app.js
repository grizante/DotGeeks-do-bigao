"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const course_1 = __importDefault(require("./routers/course"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use(body_parser_1.default.json());
app.use('/api/courses', course_1.default);
// Conexão com MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/siteEducacional')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));
// Rota inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Site Educacional!');
});
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
