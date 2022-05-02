import { Router } from "express";
import faculties from "./faculties";
import universities from "./universities";

const router = Router();

router.use("/faculties", faculties);
router.use("/universities", universities);

export default router;
