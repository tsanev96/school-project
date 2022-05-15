import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { FacultiesContext } from "../../context/faculties";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableSemester from "../TableSemester/TableSemester";
import { makeStyles } from "@mui/styles";
import { SemesterData } from "../../types/semester";
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const useStyles = makeStyles({
  root: {
    width: "70%",
    margin: "0 auto !important",
  },
  headline: {
    marginBottom: "30px !important",
  },
  semesters: {},
  majors: { paddingLeft: 16 },
  backButton: { marginBottom: 20 }
});

const SemestersList = () => {
  const classes = useStyles();
  const params = useParams();
  const [major, setMajor] = useState<SemesterData[]>([]);
  const [catalog, setCatalog] = useState()

  const handleClick = (data: SemesterData[]) => {
    const sortedSemesters = data.sort((a, b) => Number(a.semester.value) - Number(b.semester.value));
    setMajor(sortedSemesters)
  }

  const openCatalog = (data: SemesterData) => { }
  return (
    <FacultiesContext.Consumer>
      {(data) => {
        const faculty = data.find((fac) => fac._id === params.id);

        if (!faculty) {
          return <div>not found</div>;
        }

        if (major && major.length) {
          return <Grid className={classes.root}>
            <Grid item>
              <IconButton className={classes.backButton} onClick={() => setMajor([])}>
                <ArrowBackIcon />
              </IconButton>
            </Grid>
            <Grid item>
              {major.map(el => (
                <Accordion className="test-class">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Semester: {el.semester.value}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Button variant="contained" onClick={() => openCatalog(el)}>Open Catalog</Button>
                    <TableSemester data={el} />
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        }

        return (
          <List className={classes.root}>
            <ListItemText className={classes.majors}>
              <Typography variant="h4">Majors</Typography>
            </ListItemText>
            {faculty.major.map(el => (
              <ListItemButton onClick={() => handleClick(el.information)}>
                {el.value}
              </ListItemButton>
            ))}
          </List>
        );
      }}
    </FacultiesContext.Consumer>
  );
};

export default SemestersList;
