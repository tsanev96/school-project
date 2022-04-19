import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TableCell } from "../../types/tableCell";

const useStyles = makeStyles({
  cellWrapper: {
    padding: 0,
    "& > *": {
      padding: 10,
      borderBottom: "1px solid black",
    },
    "& > *:nth-child(even)": {
      borderBottom: "none",
    },
  },
});

interface IProps {
  data: TableCell[];
}

const Outcomes = ({ data }: IProps) => {
  const classes = useStyles();

  const renderCell = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return "";
    }

    return (
      <Grid container item justifyContent="center">
        {value}
      </Grid>
    );
  };
  return (
    <Grid container alignItems="stretch">
      <Grid item xs={3}>
        Outcomes
      </Grid>
      {data.map((item) => (
        <Grid
          className={classes.cellWrapper}
          item
          container
          direction="column"
          xs
        >
          {renderCell(item.label)}
          {renderCell(item.value)}
        </Grid>
      ))}
    </Grid>
  );
};

export default Outcomes;
