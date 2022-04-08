import { Head, Body } from "../types/table";
import TableTop from "./TableTop";
import { makeStyles } from "@mui/styles";
import { Box, Grid } from "@mui/material";
import TableCourseEvaluation from "./TableCourseEvaluation";
import TableMid from "./TableMid";

const useStyles = makeStyles({
  root: {
    margin: "40px auto",
    maxWidth: 1140,
    border: "2px solid black",
  },
  item: {
    "& > *": {
      padding: "7px 10px",
      textAlign: "left",
      // borderBottom: "1px solid black",
      // borderLeft: "1px solid black",
      // borderRight: "1px solid black",
    },
  },
});

const TableCourse = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <TableTop />
      <TableMid />
      <TableCourseEvaluation />
    </Box>
  );
};

export default TableCourse;
