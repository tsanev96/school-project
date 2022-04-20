import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { outcomes } from "../../data";
import Outcomes from "../Outcomes/Outcomes";
import TableTwoCols from "../shared/TableTwoCols";
import TableTypeOne from "../shared/TableTypeOne";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    padding: 10,
    width: 1200,
    fontSize: 16,
    border: "4px solid lightblue",
    "& > *": {
      border: "2px solid black",
      borderBottom: "none",
      // cell
      "& > *": {
        padding: "10px 15px",
        borderRight: "2px solid black",
      },
      "& > *:last-child": {
        borderRight: "none",
      },
    },
    "& > *:last-child": {
      borderBottom: "2px solid black",
    },
  },
});

const TableCourse = () => {
  const classes = useStyles();

  const data = [
    {
      id: "courseName",
      label: "Course Name",
      value: "Int. to Atmosphere science",
    },
    { id: "code", label: "Code", value: "MTO111/E" },
    { id: "courseType", label: "Course Type", value: "ED" },
    { id: "semester", label: "Regular Semester", value: "1" },
    { id: "credit", label: "Credit", value: "2" },
    { id: "ects", label: "ECTS", value: "3" },
    { id: "Lecture", label: "Lecture", value: "3" },
    { id: "recitation", label: "Recitation", value: "0" },
    { id: "lab", label: "lab", value: "0" },
  ];

  const dataTwoCols = [
    {
      id: "faculty",
      label: "Faculty",
      value: "Technichal University of Sofia",
    },
    { id: "departament", label: "Departament", value: "Software Computing" },
    { id: "language", label: "language", value: "English" },
    { id: "requiredElective", label: "requiredElective", value: "Required" },
    {
      id: "Office hours",
      label: "Office hours",
      value: "Please see instructor's office door for more updated information",
    },
    { id: "content", label: "Content", value: "content" },
    {
      id: "Objectives",
      label: "Objectives",
      value: ["objective 1", "objective 2", "objective 3"],
    },
    {
      id: "courseEducationalOutcomes",
      label: "courseEducationalOutcomes",
      value: [
        "To able to comparison ",
        "To be able to determine ",
        "To be able to …",
        "To be able to ",
        "To be able to know",
        "To calculate ",
      ],
    },
  ];

  const dataTwoColsSecond = [
    {
      id: "textbook",
      label: "Textbook",
      value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
    },
    {
      id: "otherReferences",
      label: "Other References",
      value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
    },
    { id: "laboratoryWork", label: "Laboratory Work", value: "11" },
    { id: "computerUsage", label: "Computer Usage", value: "2" },
    { id: "others", label: "Others", value: "3" },
  ];

  return (
    <Grid className={classes.root} container>
      <TableTypeOne data={data} />
      <TableTwoCols data={dataTwoCols} showAsAList />
      <TableTwoCols data={dataTwoColsSecond} />
      <Outcomes data={outcomes} />
    </Grid>
  );
};

export default TableCourse;
