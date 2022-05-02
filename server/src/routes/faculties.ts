import express from "express";
import Faculty from "../models/faculty";
import University from "../models/university";

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
    ",Филологически",
    ",Исторически",
    ",Юридически",
    ",Педагогически",
    ",Стопански",
    ",Философски",
    ",Математика и информатика",
    ",Православен богословски",
    ",Факултет по изобразително изкуство",
    ",Факултет „Навигационен",
    ",Факултет „Инженерен",
    ",Техника и строителни технологии в транспорта",
    ",Комуникации и електрообзавеждане в транспорта",
    ",Транспортен мениджмънт",
    ",Медицински факултет",
    ",Факултет по дентална медицина",
    ",Фармацевтичен факултет",
    ",Факултет по обществено здраве „Проф. д-р Цекомир Воденичаров, дмн“",
  ];

  for (let i = 0; i < a.length; i++) {
    const faculty = new Faculty({
      name: a[i],
    });
    await faculty.save();
  }

  res.send("set faculties");
});

export default router;
