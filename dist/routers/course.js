"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_1 = require("../models/course");
const router = (0, express_1.Router)();
// Rota para listar cursos
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield course_1.Course.find();
        res.json(courses);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        }
        else {
            res.status(500).send('Erro desconhecido');
        }
    }
}));
// Rota para criar curso
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, content } = req.body;
        const newCourse = new course_1.Course({ title, description, content });
        yield newCourse.save();
        res.status(201).json(newCourse);
    }
    catch (err) {
        res.status(400).send(String(err)); // Converte qualquer tipo de erro para string
    }
}));
exports.default = router;
