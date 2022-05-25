type SemesterIdNames =
  | "courseName"
  | "code"
  | "courseType"
  | "semester"
  | "credit"
  | "ects"
  | "lecture"
  | "recitation"
  | "lab"
  | "faculty"
  | "departament"
  | "officeHours"
  | "content"
  | "objectives"
  | "courseEducationalOutcomes"
  | "textbook"
  | "otherReferences"
  | "laboratoryWork"
  | "computerUsage"
  | "others"
  | "requiredElective"
  | "language"
  | "description"
  | "prerequisite"
  | "classRestrictions"
  | "theoretical"
  | "tutorial";

export type SemesterData = {
  [key in SemesterIdNames]: string | number | string[];
};
