import { Box, Grid } from "@mui/material";
import { FC } from "react";

const CouseEvaluation = () => {
  const data = {};

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

  const ratioData = [10, 20, 30, 40, 50];

  const renderColumn = (items: string[] | number[], title: string) => {
    return (
      <Grid direction="column" container xs={3}>
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
      <Grid xs={4} item>
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

export default CouseEvaluation;
