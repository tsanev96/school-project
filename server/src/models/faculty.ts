import { Schema, model } from "mongoose";
import UniversityName from "./universityName";

export interface IFacultySchema {
  name: string;
  // fix type
  university?: any;
}

export const facultySchema = new Schema<IFacultySchema>({
  name: {
    type: String,
    required: true,
  },
  university: UniversityName,
});

const Faculty = model<IFacultySchema>("Faculty", facultySchema);

export default Faculty;
