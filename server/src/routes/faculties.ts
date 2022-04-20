import express from "express";

const router = express.Router();

router.get("/faculties", async (req, res) => {
  const faculties = [
    { id: "TUS", label: "Technical University of Sofia" },
    { id: "UNSS", label: "UNSS" },
  ];

  res.send(faculties);
});

export default router;
