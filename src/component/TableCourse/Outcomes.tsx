import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTableCellStyles } from "../styles";

const useStyles = makeStyles({
  leftCol: {
    borderTop: "1px solid black",
  },
  rightCol: {
    borderTop: "1px solid black",
  },
});
const Outcomes = () => {
  const classes = useStyles();
  const classesTableCell = useTableCellStyles();
  const data = [
    {
      id: "a",
      label: "a",
      value: 2,
    },
    {
      id: "b",
      label: "b",
      value: 2,
    },
    {
      id: "c",
      label: "c",
      value: 2,
    },
    {
      id: "d",
      label: "d",
      value: 2,
    },
    {
      id: "e",
      label: "e",
      value: 2,
    },
    {
      id: "f",
      label: "f",
      value: 2,
    },
    {
      id: "g",
      label: "g",
      value: 2,
    },
    {
      id: "h",
      label: "h",
      value: 2,
    },
    {
      id: "i",
      label: "i",
      value: 2,
    },
    {
      id: "j",
      label: "j",
      value: 2,
    },
    {
      id: "k",
      label: "k",
      value: 2,
    },
  ];

  return (
    <Grid container>
      <Grid
        className={`${classesTableCell.row} ${classes.leftCol}`}
        item
        xs={4}
      >
        Outcomes
      </Grid>
      <Grid className={classes.rightCol} item xs={8}>
        <Grid container>
          {data.map((item) => (
            <Grid className={classesTableCell.row} key={item.id} item xs>
              {item.label}
            </Grid>
          ))}
        </Grid>
        <Grid container>
          {data.map((item) => (
            <Grid className={classesTableCell.row} key={item.id} item xs>
              {item.value}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Outcomes;
