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
  | "language";

export type SemesterData = {
  [key in SemesterIdNames]: { label: string; value: string | string[] };
};
