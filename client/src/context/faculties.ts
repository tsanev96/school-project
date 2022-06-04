import { createContext } from "react";
import { IFacultySchemaWithId } from "../../../server/src/models/faculty";

export const FacultiesContext = createContext<IFacultySchemaWithId[]>([]);

FacultiesContext.displayName = "FacultyContext";
