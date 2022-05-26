import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";

const useStyles = makeStyles({
  root: {
    width: 1200,
    padding: 30,
    margin: "0 auto",
    background: "#F5F5F5",
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
