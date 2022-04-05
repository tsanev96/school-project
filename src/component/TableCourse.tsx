import { Head, Body } from "../types/table";
import TableGrid from "./shared/TableGrid";
import { makeStyles } from "@mui/styles";
import { Box, Grid } from "@mui/material";
import CouseEvaluation from "./CouseEvaluation";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    maxWidth: 1140,
    border: "3px solid black",
  },
  item: {
    "& > *": {
      padding: "7px 10px",
      textAlign: "left",
      borderBottom: "1px solid black",
      borderLeft: "1px solid black",
      borderRight: "1px solid black",
    },
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

  const data: {
    id: string;
    label: string;
    value: string | string[] | undefined;
  }[] = [
    { id: "deperament", label: "Department", value: "Software Computing" },
    { id: "lang", label: "Language", value: "english" },
    { id: "required", label: "Required/Elective", value: "Required" },
    {
      id: "officeHourse",
      label: "Office hours",
      value:
        "Please see instructor&#39;s office door for more updated information",
    },
    { id: "content", label: "Content", value: "some content" },
    {
      id: "objectives",
      label: "Objectives",
      value: ["objective 1", "objective 2"],
    },
    {
      id: "outcomeCourse",
      label: "Course Educational Outcomes",
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
      id: "textBook",
      label: "Textbook",
      value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
    },
    {
      id: "otherReferences",
      label: "Other References",
      value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
    },
    { id: "laboratoryWork", label: "Laboratory Work", value: undefined },
    { id: "computerUsage", label: "Computer Usage", value: undefined },
    { id: "computerUsage", label: "Others", value: undefined },
  ];

  const topics = {
    id: "topics",
    value: [
      { name: "Introduction", ceo: "2-3" },
      { name: "Stability", ceo: "2-3" },
      { name: "Cloud Development", ceo: "2-3" },
      { name: "Precipitation", ceo: "2-3" },
      { name: "Midtern", ceo: "2-3" },
    ],
  };

  const getValueCol = (el: string | string[] | undefined) => {
    if (typeof el === "string") {
      return el;
    } else if (Array.isArray(el)) {
      return el.map((value) => (
        <Grid key={value} container>
          <Grid item>{value}</Grid>
        </Grid>
      ));
    }
    return "";
  };

  return (
    <Box className={classes.root}>
      <TableGrid
        headValues={headValues}
        bodyValues={bodyValues}
        firstColSpan={4}
        className={classes.item}
      />
      <Grid className={classes.item} container>
        {data.map((el) => (
          <>
            <Grid xs={4} item>
              {el.label}
            </Grid>
            <Grid xs={8} item>
              {getValueCol(el.value)}
            </Grid>
          </>
        ))}
      </Grid>
      <CouseEvaluation />
    </Box>
  );
};

export default TableCourse;
