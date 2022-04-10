import TableTop from "./TableTop";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import TableCourseEvaluation from "./TableCourseEvaluation";
import TableMid from "./TableMid";
import Outcomes from "./Outcomes";

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
      <Outcomes />
    </Box>
  );
};

export default TableCourse;
