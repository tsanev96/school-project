import { Schema, model } from "mongoose";
import { facultySchema, IFacultySchema } from "./faculty";

interface IUniversityName {
  name: string;
  faculties: any;
}

export const universitySchema = new Schema<IUniversityName>({
  name: { type: String, required: true },
});

const UniversityName = model<IUniversityName>("University", universitySchema);

export default UniversityName;
