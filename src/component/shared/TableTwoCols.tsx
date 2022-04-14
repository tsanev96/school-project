import { Box, Grid, Typography } from "@mui/material";

type IProps = {
  data: { id: string; label: string; value: string | string[] }[];
};

const TableTwoCols = ({ data }: IProps) => {
  const renderValues = (value: string | string[]) => {
    if (typeof value === "string") {
      return value;
    }

    return (
      <Box>
        {value.map((item) => (
          <Typography key={item}>{item}</Typography>
        ))}
      </Box>
    );
  };

  return (
    <>
      {data.map((item) => (
        <Grid container>
          <Grid container alignContent="center" item xs={3}>
            {item.label}
          </Grid>
          <Grid item xs={9}>
            {renderValues(item.value)}
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default TableTwoCols;
