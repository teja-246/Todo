import { Router } from "express";
import {
    createTask,
    getAllTasks,
    deleteTask,
    updateTask
} from "../controllers/task.controller.js";

const router = Router();

router.route('/create').post(createTask);
router.route('/delete/:id').delete(deleteTask);
router.route('/getAllTasks').get(getAllTasks);
router.route('/update').put(updateTask);

export default router;