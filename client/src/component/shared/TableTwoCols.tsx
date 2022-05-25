import { Box, Grid, Typography } from "@mui/material";
import { TableCell } from "../../types/tableCell";

type IProps = {
  data: TableCell[];
  showAsAList?: boolean;
};

const TableTwoCols = ({ data, showAsAList }: IProps) => {
  const renderValues = (value: string | number | string[]) => {
    if (typeof value === "string" || typeof value === "number") {
      return value;
    }

    return (
      <Box>
        {value.map((item, index) => (
          <Typography key={item}>
            {showAsAList && `${index + 1}. `}
            {item}
          </Typography>
        ))}
      </Box>
    );
  };

  return (
    <>
      {data.map((item) => (
        <Grid key={item.label} container alignItems="stretch">
          <Grid container alignContent="center" item xs={3}>
            {item.label}
          </Grid>
          <Grid item xs={9}>
            {renderValues(item.value || "")}
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default TableTwoCols;
