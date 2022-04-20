import { Router } from "express";
import faculties from "./faculties";

const router = Router();

router.use(faculties);

export default router;
