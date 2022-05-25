import { FC } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { outcomes } from "../../data";
import Outcomes from "../Outcomes/Outcomes";
import TableTwoCols from "../shared/TableTwoCols";
import TableTypeOne from "../shared/TableTypeOne";
import { SemesterData } from "../../types/semester";

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

  const col1 = [
    { label: "Course Name", value: data.courseName },
    { label: "Code", value: data.code },
    { label: "Course Type", value: data.courseType },
    { label: "Semester", value: data.semester },
    { label: "Credit", value: data.credit },
    { label: "ECTS", value: data.ects },
    { label: "Lecture", value: data.lecture },
    { label: "Recitation", value: data.recitation },
    { label: "Lab", value: data.lab },
  ];

  const col2 = [
    {
      label: "Faculty",
      value: data.faculty,
    },
    { label: "Departament", value: data.departament },
    { label: "Language", value: data.language },
    { label: "Required Elective", value: data.requiredElective },
    {
      label: "Office hours",
      value: data.officeHours,
    },
    { label: "Content", value: data.content },
    {
      label: "Objectives",
      value: data.objectives,
    },
    {
      label: "Course Educational Outcomes",
      value: data.courseEducationalOutcomes,
    },
  ];

  const col3 = [
    {
      label: "textbook",
      value: data.textbook,
    },
    {
      label: "otherReferences",
      value: data.otherReferences,
    },
    { label: "laboratoryWork", value: data.laboratoryWork },
    { label: "computerUsage", value: data.computerUsage },
    { label: "others", value: data.others },
  ];

  return (
    <Grid className={classes.root} container>
      <TableTypeOne data={col1} />
      <TableTwoCols data={col2} showAsAList />
      <TableTwoCols data={col3} />
      <Outcomes data={outcomes} />
    </Grid>
  );
};

export default TableSemester;
