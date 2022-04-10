import { FC } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTableCellStyles } from "../styles";

interface IProps {}

const useStyles = makeStyles({
  row: {
    borderBottom: "none",
  },
  rightCol: {
    padding: 0,
    borderBottom: "none",
  },
  rightColCell: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  lastColumn: {
    "&>*": {
      borderRight: "none",
      marginRight: "-1px !important",
    },
  },
});

const TableCourseEvaluation: FC<IProps> = () => {
  const classesTableCell = useTableCellStyles();
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

  const ratioData = [10, 20, 30, 40, 50, 60, 70, 80];

  const renderColumn = (
    items: string[] | number[],
    title: string,
    isLastColumn = false
  ) => {
    return (
      <Grid
        className={isLastColumn ? classes.lastColumn : ""}
        direction="column"
        container
        xs={4}
      >
        <Grid className={classes.rightColCell} item>
          {title}
        </Grid>
        {items.map((item) => (
          <Grid className={classes.rightColCell} key={item} item>
            {item}
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Grid container>
      <Grid
        className={`${classesTableCell.row} ${classes.row}`}
        xs={4}
        container
        alignItems="center"
        item
      >
        Course Evaluation
      </Grid>
      <Grid
        className={`${classesTableCell.row} ${classes.rightCol}`}
        xs={8}
        item
      >
        <Grid container>
          {renderColumn(types, "Type")}
          {renderColumn(numberData, "Number")}
          {renderColumn(ratioData, "Ratio", true)}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TableCourseEvaluation;
