import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";

interface IHeadlineWithDesription {
  title: string;
  description: string;
}

const useStyles = makeStyles({
  title: {
    marginBottom: "10px !important",
  },
  description: {
    marginBottom: "10px !important",
  },
});

const HeadlineWithDesription: FC<IHeadlineWithDesription> = ({
  title,
  description,
}) => {
  const classes = useStyles();

  return (
    <Grid>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Typography className={classes.description} variant="h5">
        {description}
      </Typography>
    </Grid>
  );
};

export default HeadlineWithDesription;
