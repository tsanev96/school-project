import {
  AppBar,
  Box,
  Container,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginBottom: 40,
  },
  logo: {
    "&.root": {
      fontWeight: "bold",
      color: "red",
    },
  },
  link: {
    margin: "0 6px",
    textDecoration: "none",
    color: "#fff",
  },
});

const Header = () => {
  const classes = useStyles();

  const data = [
    { name: "faculties", path: "faculties" },
    { name: "universities", path: "universities" },
  ];

  return (
    <AppBar className={classes.root} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {data.map(({ name, path }) => (
              <NavLink className={classes.link} key={path} to={path}>
                {name}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
