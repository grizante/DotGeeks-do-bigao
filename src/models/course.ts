import mongoose, { Schema, Document } from 'mongoose';

// Define o tipo do documento
interface ICourse extends Document {
    title: string;
    description: string;
    content: string;
}

// Define o esquema do curso
const courseSchema = new Schema<ICourse>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
});

// Exporta o modelo
const Course = mongoose.model<ICourse>('Course', courseSchema);
export { Course };
