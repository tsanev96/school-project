import express from "express";
import University from "../models/university";
import { isValidObjectId } from "mongoose";
const router = express.Router();

router.get("/", async (req, res) => {
  const universities = await University.find({});
  res.send(universities);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const isValidId = isValidObjectId(id);
  if (!isValidId) return res.status(400).send("bad request");
  const university = await University.findById(id);
  res.send(university);
});

router.post("/", async (req, res) => {
  const universities = [
    "Технически Университет",
    "УНСС",
    "АМВР",
    "ВУТП",
    "СОФИЙСКИ УНИВЕРСИТЕТ",
  ];

  for (let i = 0; i < universities.length; i++) {
    const uni = new University({
      name: universities[i],
    });

    await uni.save().catch((err) => {
      console.log("there was an error", err);
    });
  }

  res.send("created");
});

export default router;
