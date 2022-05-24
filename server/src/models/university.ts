import { Schema, model } from "mongoose";

export interface IUniversity {
  name: string;
}

export const universitySchema = new Schema<IUniversity>({
  name: { type: String, required: true },
});

const University = model<IUniversity>("University", universitySchema);

export default University;
