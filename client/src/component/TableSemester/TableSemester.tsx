import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { outcomes } from "../../data";
import { useFetchHTTP } from "../../hooks/useFetchHTTP";
import Outcomes from "../Outcomes/Outcomes";
import TableTwoCols from "../shared/TableTwoCols";
import TableTypeOne from "../shared/TableTypeOne";
import { IFacultySchema } from "../../../../server/src/models/faculty";

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

const TableSemester = () => {
  const classes = useStyles();

  const { data, isLoading } = useFetchHTTP<IFacultySchema[]>("faculties", []);

  // const major = data[0].major[0];

  if (isLoading) {
    return <div>still loading</div>;
  }
  const information = data[0].information[0];
  const major = data[0].major;

  const col1 = [
    { id: "courseName", ...information.courseName },
    { id: "code", ...information.code },
    { id: "courseType", ...information.courseType },
    { id: "semester", ...information.semester },
    { id: "credit", ...information.credit },
    { id: "ects", ...information.ects },
    { id: "Lecture", ...information.lecture },
    { id: "recitation", ...information.recitation },
    { id: "lab", ...information.lab },
  ];

  const col2 = [
    {
      id: "faculty",
      ...information.faculty,
    },
    { id: "departament", ...information.departament },
    { id: "language", ...information.language },
    { id: "requiredElective", ...information.requiredElective },
    {
      id: "Office hours",
      ...information.officeHours,
    },
    { id: "content", ...information.content },
    {
      id: "Objectives",
      ...information.objectives,
    },
    {
      id: "courseEducationalOutcomes",
      ...information.courseEducationalOutcomes,
    },
  ];

  const col3 = [
    {
      id: "textbook",
      ...information.textbook,
    },
    {
      id: "otherReferences",
      ...information.otherReferences,
    },
    { id: "laboratoryWork", ...information.laboratoryWork },
    { id: "computerUsage", ...information.computerUsage },
    { id: "others", ...information.others },
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
