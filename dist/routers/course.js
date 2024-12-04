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
const course_1 = require("../models/course"); // Importação correta para exportações nomeadas
const router = (0, express_1.Router)();
// Create a new course
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, content } = req.body;
        // Create and save the new course
        const newCourse = new course_1.Course({ title, description, content });
        yield newCourse.save();
        res.status(201).json(newCourse);
    }
    catch (err) {
        console.error('Error creating course:', err);
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
// Get all courses
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield course_1.Course.find();
        res.status(200).json(courses);
    }
    catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
}));
// Get a single course by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const course = yield course_1.Course.findById(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(course);
    }
    catch (err) {
        console.error('Error fetching course:', err);
        res.status(500).json({ error: 'Failed to fetch course' });
    }
}));
// Update a course by ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, description, content } = req.body;
        const updatedCourse = yield course_1.Course.findByIdAndUpdate(id, { title, description, content }, { new: true } // Return the updated document
        );
        if (!updatedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    }
    catch (err) {
        console.error('Error updating course:', err);
        res.status(500).json({ error: 'Failed to update course' });
    }
}));
// Delete a course by ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedCourse = yield course_1.Course.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    }
    catch (err) {
        console.error('Error deleting course:', err);
        res.status(500).json({ error: 'Failed to delete course' });
    }
}));
exports.default = router;
