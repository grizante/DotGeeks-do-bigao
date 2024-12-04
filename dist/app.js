"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const course_1 = __importDefault(require("./routers/course"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dotGeeksDB'; // Default MongoDB URI
// Middleware to serve static files (CSS, JS, Images)
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Connect to MongoDB
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit process if DB connection fails
});
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// API routes
app.use('/api/courses', course_1.default);
// Serve the main HTML files
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../views/index.html'));
});
app.get('/courses.html', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../views/courses.html'));
});
// Catch-all route for undefined routes
app.use((req, res) => {
    res.status(404).send('Página não encontrada.');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
