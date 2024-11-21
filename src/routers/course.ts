import { Router } from 'express';
import { Course } from '../models/course';

const router = Router();

// Endpoint para criar um curso
router.post('/', async (req, res) => {
    try {
        const { title, description, content } = req.body;

        // Cria e salva o curso
        const newCourse = new Course({ title, description, content });
        await newCourse.save();

        res.status(201).json(newCourse);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Erro desconhecido' });
        }
    }
});

export default router;
