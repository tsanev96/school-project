import { Grid } from "@mui/material";
import { TableCell } from "../../types/tableCell";

type IProps = {
  data: TableCell[];
};

const TableTypeOne = ({ data }: IProps) => {
  return (
    <Grid container alignItems="stretch">
      {data.map((item, index) => (
        <Grid item container xs={index === 0 ? 3 : 1} direction="column">
          <Grid item>{item.label}</Grid>
          <Grid item>{item.value}</Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default TableTypeOne;
