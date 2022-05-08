import express from "express";
import Faculty, { IFacultySchema } from "../models/faculty";

const router = express.Router();

router.get("/", async (req, res) => {
  const faculties = await Faculty.find({});

  res.send(faculties);
});

router.post("/", async (req, res) => {
  const a: IFacultySchema[] = [
    {
      name: "Технически",
      major: {
        label: "Course Name",
        value: "Int. to Atmosphere science",
      },
      information: [
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 1 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 3 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 4 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 2 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
      ],
    },
    {
      name: "Исторически",
      major: {
        label: "Course Name",
        value: "Int. to Atmosphere science",
      },
      information: [
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 1 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 3 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 4 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 2 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
      ],
    },
    {
      name: "Юридически",
      major: {
        label: "Course Name",
        value: "Int. to Atmosphere science",
      },
      information: [
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 1 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 3 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 4 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 2 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
      ],
    },
    {
      name: "Педагогически",
      major: {
        label: "Course Name",
        value: "Педагогика",
      },
      information: [
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 1 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 3 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 4 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 2 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
      ],
    },
    {
      name: "Стопански",
      major: {
        label: "Course Name",
        value: "Стопански",
      },
      information: [
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 1 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 3 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 4 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 2 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
      ],
    },
    {
      name: "Философски",
      major: {
        label: "Course Name",
        value: "Философия",
      },
      information: [
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 1 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 3 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 4 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 2 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
      ],
    },
    {
      name: "Математика и информатика",
      major: {
        label: "Course Name",
        value: "Информатика",
      },
      information: [
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 1 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 3 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 4 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 2 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
      ],
    },
    {
      name: "Православен богословски",
      major: {
        label: "Course Name",
        value: "православен",
      },
      information: [
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 1 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 3 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 4 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 2 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
      ],
    },
    {
      name: "Факултет по изобразително изкуство",
      major: {
        label: "Course Name",
        value: "Изобразително изкуство",
      },
      information: [
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 1 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 3 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 4 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 2 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
      ],
    },
    {
      name: "Факултет „Навигационен",
      major: {
        label: "Course Name",
        value: "Изобразително изкуство",
      },
      information: [
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 1 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 3 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 4 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 2 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
      ],
    },
    {
      name: "Техника и строителни технологии в транспорта",
      major: {
        label: "Course Name",
        value: "Транспорт",
      },
      information: [
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 1 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 3 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 4 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
        {
          courseName: {
            label: "courseName",
            value: "Int. to Atmosphere science",
          },
          code: { label: "Code", value: "MTO111/E" },
          courseType: { label: "Course Type", value: "ED" },
          semester: { label: "Regular Semester", value: 2 },
          credit: { label: "Credit", value: "2" },
          ects: { label: "ECTS", value: "3" },
          lecture: { label: "Lecture", value: "3" },
          recitation: { label: "Recitation", value: "0" },
          lab: { label: "lab", value: "0" },
          faculty: {
            label: "Faculty",
            value: "Technichal University of Sofia",
          },
          departament: {
            label: "Departament",
            value: "Software Computing",
          },
          officeHours: {
            label: "Office hours",
            value:
              "Please see instructor's office door for more updated information",
          },
          content: {
            label: "Content",
            value: "content",
          },
          objectives: {
            label: "Objectives",
            value: ["objective 1", "objective 2", "objective 3"],
          },
          courseEducationalOutcomes: {
            label: "courseEducationalOutcomes",
            value: [
              "To able to comparison ",
              "To be able to determine ",
              "To be able to …",
              "To be able to ",
              "To be able to know",
              "To calculate ",
            ],
          },
          computerUsage: {
            label: "Computer Usage",
            value: "2",
          },
          laboratoryWork: {
            label: "Laboratory Work",
            value: "11",
          },
          otherReferences: {
            label: "Other References",
            value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
          },
          others: {
            label: "Others",
            value: "3",
          },
          textbook: {
            label: "Textbook",
            value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
          },
          language: {
            label: "Language",
            value: "English",
          },
          requiredElective: {
            label: "Required Elective",
            value: "Required",
          },
        },
      ],
    },
    // { name: "Факултет „Инженерен", major: [{}] },
    // { name: "", major: [{}] },
    // { name: "Комуникации и електрообзавеждане в транспорта", major: [{}] },
    // { name: "Транспортен мениджмънт", major: [{}] },
    // { name: "Медицински факултет", major: [{}] },
    // { name: "Факултет по дентална медицина", major: [{}] },
    // { name: "Фармацевтичен факултет", major: [{}] },
    // {
    //   name: "Факултет по обществено здраве „Проф. д-р Цекомир Воденичаров, дмн“",
    //   major: [{}],
    // },
  ];

  for (let i = 0; i < a.length; i++) {
    const faculty = new Faculty({
      name: a[i].name,
      information: [...a[i].information],
      major: a[i].major,
    });
    await faculty.save().catch((err) => {
      console.log("error here", err);
    });
  }

  res.send("set faculties");
});

export default router;
