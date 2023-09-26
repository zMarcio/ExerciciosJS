import { Router } from "express";
import alunoController from "../controllers/AlunoController";
const router = new Router()

import loginRequired from "../middlewares/loginRequired";


// router.get("/", alunoController.index)
router.post("/",loginRequired ,alunoController.store)
router.put("/:id",loginRequired ,alunoController.update)
router.get("/:id",loginRequired ,alunoController.show)
router.delete("/:id",loginRequired ,alunoController.delete)


export default router