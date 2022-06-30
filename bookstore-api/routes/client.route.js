import express from "express";
import ClientController from "../controllers/client.controller.js";
import { authorize } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/", authorize("admin"), ClientController.createClient);
router.get("/", authorize("admin"), ClientController.getClients);
router.get("/:id", authorize("admin", "client"), ClientController.getClient);
router.delete("/:id", authorize("admin"), ClientController.deleteClient);
router.put("/", authorize("admin", "client"), ClientController.updateClient);

export default router;
