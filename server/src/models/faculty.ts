import { Schema, model, Types } from "mongoose";
import { SemesterData } from "../../../client/src/types/semester";

export interface IFacultySchema {
  name: string;
  major: SemesterData[];
}

const valueString = { label: String, value: String };
const valueArray = { label: String, value: [String] };

export const FacultySchema = new Schema<IFacultySchema>({
  name: { type: String, required: true },
  major: [
    {
      code: valueString,
      courseName: valueString,
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
    },
  ],
});

const Faculty = model<IFacultySchema>("Faculty", FacultySchema);

export default Faculty;
