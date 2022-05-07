import { Schema, model } from "mongoose";
import { SemesterData } from "../../../client/src/types/semester";

export interface IFacultySchema {
  name: string;
  information: SemesterData[];
  major: { label: string; value: string };
}

const valueString = { label: String, value: String };
const valueArray = { label: String, value: [String] };

export const FacultySchema = new Schema<IFacultySchema>({
  name: { type: String, required: true },
  major: valueString,
  information: [
    {
      code: valueString,
      courseType: valueString,
      credit: valueString,
      ects: valueString,
      lab: valueString,
      lecture: valueString,
      recitation: valueString,
      semester: valueString,
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
    },
  ],
});

const Faculty = model<IFacultySchema>("Faculty", FacultySchema);

export default Faculty;
