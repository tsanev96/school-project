import { Head, Body } from "../types/table";
import TableGrid from "./shared/TableGrid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    maxWidth: 1020,
  },
});

const TableCourse = () => {
  const classes = useStyles();
  const headValues: Head[] = [
    { id: "courseName", label: "Course Name" },
    { id: "code", label: "Code" },
    { id: "courseType", label: "Course Type" },
    { id: "semester", label: "Regular Semester" },
    { id: "credit", label: "Credit" },
    { id: "ects", label: "ECTS" },
    { id: "Lecture", label: "Lecture" },
    { id: "recitation", label: "Recitation" },
    { id: "lab", label: "lab" },
  ];

  const bodyValues: Body[] = [
    { id: "courseName", value: "Int. to Atmosphere science" },
    { id: "code", value: "MTO111/E" },
    { id: "courseType", value: "ED" },
    { id: "semester", value: "1" },
    { id: "credit", value: "2" },
    { id: "ects", value: "3" },
    { id: "Lecture", value: "3" },
    { id: "recitation", value: "0" },
    { id: "lab", value: "0" },
  ];

  const obj = [
    { id: "deperament", value: "Software Computing" },
    { id: "lang", value: "english" },
    { id: "required", value: true },
    {
      id: "officeHourse",
      value:
        "Please see instructor&#39;s office door for more updated information",
    },
    { id: "content", value: "some content" },
    { id: "objectives", value: ["1.", "2."] },
    {
      id: "outcomeCourse",
      value: [
        "To able to comparison",
        "To be able to determine",
        "To be able to …",
        "To be able to",
        "To be able to know",
        "To calculate",
        "To …",
        "To …",
      ],
    },
    {
      id: "topics",
      value: [
        { name: "Introduction", ceo: "2-3" },
        { name: "Stability", ceo: "2-3" },
        { name: "Cloud Development", ceo: "2-3" },
        { name: "Precipitation", ceo: "2-3" },
        { name: "Midtern", ceo: "2-3" },
      ],
    },
    { id: "textBook", value: ["Ozdikililer E., 2021, Publishing, Bulgaria"] },
    {
      id: "otherReferences",
      value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
    },
    { id: "laboratoryWork", value: null },
    { id: "computerUsage", value: null },
    { id: "computerUsage", value: null },
  ];

  return (
    <TableGrid
      headValues={headValues}
      bodyValues={bodyValues}
      firstColSpan={3}
      className={classes.root}
    />
  );
};

export default TableCourse;
