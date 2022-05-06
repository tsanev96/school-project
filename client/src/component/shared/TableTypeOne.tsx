import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TableCell } from "../../types/tableCell";

const useStyles = makeStyles({
  cellWrapper: {
    padding: "0 !important",
    "& > *": {
      padding: 10,
      borderBottom: "1px solid black",
    },
    "& > *:nth-child(even)": {
      borderBottom: "none",
    },
  },
});

type IProps = {
  data: TableCell[];
};

const TableTypeOne = ({ data }: IProps) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="stretch">
      {data.map((item, index) => (
        <Grid
          key={item.id}
          className={classes.cellWrapper}
          item
          container
          xs={index === 0 ? 3 : true}
          direction="column"
        >
          <Grid item>{item.label}</Grid>
          <Grid item>{item.value}</Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default TableTypeOne;
