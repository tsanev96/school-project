import { Schema, model } from "mongoose";
import { IFacultySchema } from "./faculty";

interface IUniversity {
  name: string;
  faculties: IFacultySchema;
}

export const universitySchema = new Schema<IUniversity>({
  name: { type: String, required: true },
  faculties: { type: Array, required: true },
});

const University = model<IUniversity>("University", universitySchema);

export default University;
