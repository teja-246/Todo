import { Task } from "../models/task.model.js";
import mongoose from "mongoose";

const createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newTask = new Task({ title, description });
        await newTask.save();
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find();
        res.status(200).json(allTasks);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No task with id: ${id}`);

    await Task.findByIdAndRemove(id);

    res.json({ message: 'Task deleted successfully' });
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No task with id: ${id}`);

    const updatedTask = { title, description, _id: id };
    await Task.findByIdAndUpdate(id, updatedTask, { new: true });

    res.json(updatedTask);
}

export { createTask, getAllTasks, deleteTask, updateTask };