import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { SemesterData } from "../../../client/src/types/semester";

export interface Major {
  label: string;
  value: string;
  information: SemesterData[];
}

export interface IFacultySchema {
  name: string;
  major: Major[];
  university: {
    _id: mongoose.Types.ObjectId;
    name: string;
  };
}

export interface IFacultySchemaWithId extends IFacultySchema {
  _id: string;
}

const valueString = { label: String, value: String };
const valueArray = { label: String, value: [String] };
const valueNumber = { label: String, value: Number };

export const FacultySchema = new Schema<IFacultySchema>({
  name: { type: String, required: true },
  major: [
    {
      ...valueString,
      information: [
        {
          code: valueString,
          courseType: valueString,
          credit: valueString,
          ects: valueString,
          lab: valueString,
          lecture: valueString,
          recitation: valueString,
          semester: valueNumber,
          faculty: valueString,
          content: valueString,
          courseEducationalOutcomes: valueArray,
          departament: valueString,
          objectives: valueArray,
          officeHours: valueString,
          textbook: valueArray,
          otherReferences: valueArray,
          courseName: valueString,
          language: valueString,
          requiredElective: valueString,
          laboratoryWork: valueString,
          computerUsage: valueString,
          others: valueString,
          description: valueString,
          classRestrictions: valueString,
          prerequisite: valueString,
          theoretical: valueString,
          tutorial: valueString,
        },
      ],
    },
  ],
  university: { name: String, _id: mongoose.Types.ObjectId },
});

const Faculty = model<IFacultySchema>("Faculty", FacultySchema);

export default Faculty;
