import express from "express";
import { 
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;