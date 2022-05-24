import express from "express";
import mongoose from "mongoose";
import Faculty, { IFacultySchema } from "../models/faculty";
import University from "../models/university";

const router = express.Router();

router.get("/", async (req, res) => {
  const faculties = await Faculty.find({});

  res.send(faculties);
});

router.post("/", async (req, res) => {
  const universityId = req.body.id;

  const university = await University.findById(universityId);
  console.log(universityId);
  console.log(university);
  if (!university) return res.status(404).send("University does not exist");

  const a: IFacultySchema[] = [
    {
      name: "Исторически факултет",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "ФАКУЛТЕТ ПО КЛАСИЧЕСКИ И НОВИ ФИЛОЛОГИИ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "ЮРИДИЧЕСКИ ФАКУЛТЕТ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "ФАКУЛТЕТ ПО НАУКИ ЗА ОБРАЗОВАНИЕТО И ИЗКУСТВАТА",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "Машиностроителен факултет",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "БОГОСЛОВСКИ ФАКУЛТЕТ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "ФАКУЛТЕТ ПО МАТЕМАТИКА И ИНФОРМАТИКА",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "ФАКУЛТЕТ ПО ХИМИЯ И ФАРМАЦИЯ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "ГЕОЛОГО-ГЕОГРАФСКИ ФАКУЛТЕТ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "ФИЛОСОФСКИ ФАКУЛТЕТ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "ФАКУЛТЕТ ПО СЛАВЯНСКИ ФИЛОЛОГИИ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "ФАКУЛТЕТ ПО ЖУРНАЛИСТИКА И МАСОВА КОМУНИКАЦИЯ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "ФАКУЛТЕТ ПО СЛАВЯНСКИ ФИЛОЛОГИИ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "СТОПАНСКИ ФАКУЛТЕТ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "ФИЗИЧЕСКИ ФАКУЛТЕТ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "БИОЛОГИЧЕСКИ ФАКУЛТЕТ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
    {
      name: "МЕДИЦИНСКИ ФАКУЛТЕТ",
      major: [
        {
          label: "Course Name",
          value: "Int to Atmosphere science",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
            {
              courseName: {
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
                label: "Course Name",
                value: "Int. to Atmosphere science",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 2",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 2nd",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          label: "Course Name",
          value: "Major 3",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 3th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
        {
          label: "Course Name",
          value: "Major 4",
          information: [
            {
              courseName: {
                label: "Course Name",
                value: "Course 4th",
              },
              description: {
                label: "Description",
                value: "this course will learn u to ..",
              },
              classRestrictions: {
                label: "Class Restrictions",
                value: "none",
              },
              prerequisite: {
                label: "Prerequisite",
                value: "Практикум по база данни",
              },
              theoretical: { label: "Theoretical", value: 2 },
              tutorial: { label: "Tutorial", value: 1 },
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
          ],
        },
      ],
      university,
    },
  ];

  for (let i = 0; i < a.length; i++) {
    const faculty = new Faculty({
      name: a[i].name,
      major: a[i].major,
      university: a[i].university,
    });
    await faculty.save().catch((err) => {
      console.log("error here", err);
    });
  }

  res.send("set faculties");
});

export default router;
