import { Schema, model, Query, Document, Model } from "mongoose";

export interface IFacultySchema {
  name: string;
  _id: string;
}

export const FacultySchema = new Schema<IFacultySchema>({
  name: { type: String, required: true },
});

const Faculty = model<IFacultySchema>("Faculty", FacultySchema);

export default Faculty;
