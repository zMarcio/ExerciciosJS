import { Router } from "express";
import tokenController from "../controllers/TokenController";
const router = new Router()

// router.get("/", homeController.index)

router.post("/", tokenController.store)

export default router