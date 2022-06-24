import express from "express";
import ClientController from "../controllers/client.controller.js";

const router = express.Router();

router.post("/", ClientController.createClient);
router.put("/", ClientController.updateClient);
router.delete("/:id", ClientController.deleteClient);
router.get("/", ClientController.getClients);
router.get("/:id", ClientController.getClient);

export default router;
