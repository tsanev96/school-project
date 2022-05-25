import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";

const useStyles = makeStyles({
  root: {
    width: 1200,
    margin: "0 auto",
  },
});

interface IWrapper {
  children: JSX.Element | JSX.Element[];
}

const Wrapper: FC<IWrapper> = ({ children }) => {
  const classes = useStyles();

  return <Grid className={classes.root}>{children}</Grid>;
};

export default Wrapper;
