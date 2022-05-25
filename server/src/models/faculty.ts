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
}

export interface IFacultySchemaWithId extends IFacultySchema {
  _id: string;
}

const valueArray = { label: String, value: [String] };
const valueNumber = { label: String, value: Number };

export const FacultySchema = new Schema<IFacultySchema>({
  name: { type: String, required: true },
  majors: [
    {
      major: String,
      subjects: [
        {
          code: String,
          courseType: String,
          credit: String,
          ects: String,
          lab: String,
          lecture: String,
          recitation: String,
          semester: valueNumber,
          faculty: String,
          content: String,
          courseEducationalOutcomes: valueArray,
          departament: String,
          objectives: valueArray,
          officeHours: String,
          textbook: valueArray,
          otherReferences: valueArray,
          courseName: String,
          language: String,
          requiredElective: String,
          laboratoryWork: String,
          computerUsage: String,
          others: String,
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
});

const Faculty = model<IFacultySchema>("Faculty", FacultySchema);

export default Faculty;
