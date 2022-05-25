import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { SemesterData } from "../../../client/src/types/semester";

export interface Major {
  major: string;
  subjects: SemesterData[];
}

export interface IFacultySchema {
  name: string;
  majors: Major[];
  university: {
    _id: mongoose.Types.ObjectId;
    name: string;
  };
  semesters: number;
}

export interface IFacultySchemaWithId extends IFacultySchema {
  _id: string;
}

export const FacultySchema = new Schema<IFacultySchema>({
  name: { type: String, required: true },
  majors: [
    {
      major: String,
      subjects: [
        {
          code: String,
          courseType: String,
          credit: Number,
          ects: Number,
          lab: Number,
          lecture: Number,
          recitation: Number,
          semester: Number,
          faculty: String,
          content: String,
          courseEducationalOutcomes: [String],
          departament: String,
          objectives: [String],
          officeHours: String,
          textbook: [String],
          otherReferences: [String],
          courseName: String,
          language: String,
          requiredElective: String,
          laboratoryWork: Number,
          computerUsage: Number,
          others: Number,
          description: String,
          classRestrictions: String,
          prerequisite: String,
          theoretical: String,
          tutorial: String,
        },
      ],
    },
  ],
  university: { name: String, _id: mongoose.Types.ObjectId },
  semesters: Number,
});

const Faculty = model<IFacultySchema>("Faculty", FacultySchema);

export default Faculty;
