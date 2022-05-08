import { FC } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { outcomes } from "../../data";
import Outcomes from "../Outcomes/Outcomes";
import TableTwoCols from "../shared/TableTwoCols";
import TableTypeOne from "../shared/TableTypeOne";
import { SemesterData } from "../../types/semester";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    padding: 10,
    width: 1200,
    fontSize: 16,
    // border: "4px solid lightblue",
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

interface ITableSemester {
  data: SemesterData;
}

const TableSemester: FC<ITableSemester> = ({ data }) => {
  const classes = useStyles();
  const params = useParams();

  const col1 = [
    { id: "courseName", ...data.courseName },
    { id: "code", ...data.code },
    { id: "courseType", ...data.courseType },
    { id: "semester", ...data.semester },
    { id: "credit", ...data.credit },
    { id: "ects", ...data.ects },
    { id: "Lecture", ...data.lecture },
    { id: "recitation", ...data.recitation },
    { id: "lab", ...data.lab },
  ];

  const col2 = [
    {
      id: "faculty",
      ...data.faculty,
    },
    { id: "departament", ...data.departament },
    { id: "language", ...data.language },
    { id: "requiredElective", ...data.requiredElective },
    {
      id: "Office hours",
      ...data.officeHours,
    },
    { id: "content", ...data.content },
    {
      id: "Objectives",
      ...data.objectives,
    },
    {
      id: "courseEducationalOutcomes",
      ...data.courseEducationalOutcomes,
    },
  ];

  const col3 = [
    {
      id: "textbook",
      ...data.textbook,
    },
    {
      id: "otherReferences",
      ...data.otherReferences,
    },
    { id: "laboratoryWork", ...data.laboratoryWork },
    { id: "computerUsage", ...data.computerUsage },
    { id: "others", ...data.others },
  ];

  return (
    <Grid className={classes.root} container>
      <TableTypeOne data={col1} />
      <TableTwoCols data={col2} showAsAList />
      <TableTwoCols data={col3} />
      <AccessibilityNewIcon />
      <Outcomes data={outcomes} />
    </Grid>
  );
};

export default TableSemester;
