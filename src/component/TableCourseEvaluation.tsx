import { FC } from "react";
import { Grid } from "@mui/material";
import { HTMLClass } from "../types/htmlClass";
import { makeStyles } from "@mui/styles";

interface IProps extends HTMLClass {}

const useStyles = makeStyles({
  rightColItem: {
    // border: "1px solid black",
    "& > *": {
      // borderBottom: "1px solid black",
    },
  },
});

const TableCourseEvaluation: FC<IProps> = ({ className }) => {
  const data = {};
  const classes = useStyles();

  const types = [
    "Midterm exam",
    "Quiz",
    "Homework",
    "Project",
    "Term Project",
    "Laboratory",
    "Other",
    "Final Exam",
  ];

  const numberData = [1, 2, 3, 4, 5, 6, 7, 8];

  const ratioData = [10, 20, 30, 40, 50, 60, 70];

  const renderColumn = (items: string[] | number[], title: string) => {
    return (
      <Grid
        className={classes.rightColItem}
        direction="column"
        container
        xs={4}
      >
        <Grid item>{title}</Grid>
        {items.map((item) => (
          <Grid key={item} item>
            {item}
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Grid container>
      <Grid xs={4} container alignItems="center" item>
        Course Evaluation
      </Grid>
      <Grid xs={8} item>
        <Grid container>
          {renderColumn(types, "Type")}
          {renderColumn(numberData, "Number")}
          {renderColumn(ratioData, "Ratio")}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TableCourseEvaluation;
