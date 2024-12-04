import { Router } from 'express';
import { Course } from '../models/course'; // Importação correta para exportações nomeadas

const router = Router();

// Create a new course
router.post('/', async (req, res) => {
    try {
        const { title, description, content } = req.body;

        // Create and save the new course
        const newCourse = new Course({ title, description, content });
        await newCourse.save();

        res.status(201).json(newCourse);
    } catch (err) {
        console.error('Error creating course:', err);
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
});

// Get a single course by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        res.status(200).json(course);
    } catch (err) {
        console.error('Error fetching course:', err);
        res.status(500).json({ error: 'Failed to fetch course' });
    }
});

// Update a course by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, content } = req.body;

        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            { title, description, content },
            { new: true } // Return the updated document
        );

        if (!updatedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }

        res.status(200).json(updatedCourse);
    } catch (err) {
        console.error('Error updating course:', err);
        res.status(500).json({ error: 'Failed to update course' });
    }
});

// Delete a course by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCourse = await Course.findByIdAndDelete(id);

        if (!deletedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }

        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (err) {
        console.error('Error deleting course:', err);
        res.status(500).json({ error: 'Failed to delete course' });
    }
});

export default router;
