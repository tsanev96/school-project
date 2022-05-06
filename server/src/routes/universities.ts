import express from "express";
import Faculty, { IFacultySchema } from "../models/faculty";
import University from "../models/university";
import { Model } from "mongoose";
const router = express.Router();

router.get("/", async (req, res) => {
  const faculties = [
    { id: "TUS", label: "Technical University of Sofia" },
    { id: "UNSS", label: "UNSS" },
  ];

  res.send(faculties);
});

router.post("/", async (req, res) => {
  const a = [
    "Аграрен университет",
    "Бургаски свободен университет",
    "Великотърновски университет",
    "Висше военноморско училище (Варна)",
    "Висше транспортно училище",
    "Висше училище по телекомуникации и пощи",
    "Медицински университет – София",
  ];

  const fac = await Faculty.findOne({
    name: "Филологически",
  });

  for (let i = 0; i < a.length; i++) {
    if (fac) {
      const uni = new University({
        name: a[i],
        faculties: [{ _id: fac._id, name: fac.name }],
      });
      await uni.save();
    }
  }

  res.send("created");
});

export default router;
