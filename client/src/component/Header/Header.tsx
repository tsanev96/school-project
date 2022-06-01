import { AppBar, Box, Container, Toolbar } from "@mui/material";
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
    { name: "университети", path: "universities" },
    { name: "факултети", path: "faculties" },
    { name: "специалности", path: "majors" },
  ];

  return (
    <AppBar className={classes.root} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
