import { Schema, model } from "mongoose";
import { facultySchema } from "./faculty";
import UniversityName from "./universityName";

interface IUniversity {
  name: string;
  // fix type
  faculties: any[];
}

export const universitySchema = new Schema<IUniversity>({
  name: UniversityName,
  faculties: [facultySchema],
});

const University = model<IUniversity>("University", universitySchema);

export default University;
