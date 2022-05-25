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
import { useNavigate, useParams } from "react-router-dom";
import { FacultiesContext } from "../../context/faculties";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableSemester from "../TableSemester/TableSemester";
import { makeStyles } from "@mui/styles";
import { SemesterData } from "../../types/semester";
import { FC, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CourseCatalog from "../CourseCatalog/CourseCatalog";
import Wrapper from "../shared/Wrapper";
import { Major } from "../../../../server/src/models/faculty";

const useStyles = makeStyles({
  headline: {
    marginBottom: "30px !important",
  },
  semesters: {},
  majors: { paddingLeft: 16 },
  backButton: { marginBottom: 20 },
  title: { marginBottom: 20 },
});

interface ISubjects extends Major {
  semesters: number;
  onBack: () => void;
}

const Subjects: FC<ISubjects> = ({ subjects, major, semesters, onBack }) => {
  const classes = useStyles();
  const [currentSemester, setCurrentSemester] = useState(0);
  const [catalog, setCatalog] = useState<SemesterData | null>(null);

  if (catalog) {
    return <CourseCatalog data={catalog} onBack={() => setCatalog(null)} />;
  }

  if (currentSemester) {
    return (
      <Wrapper>
        <Typography component="div">
          <IconButton
            className={classes.backButton}
            onClick={() => setCurrentSemester(0)}
          >
            <ArrowBackIcon />
          </IconButton>
        </Typography>
        <Typography component="div">
          {subjects.map((el) => (
            <Typography key={el.courseName as string} component="div">
              {currentSemester === el.semester ? (
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{el.courseName}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Button variant="contained" onClick={() => setCatalog(el)}>
                      Open Catalog
                    </Button>
                    <TableSemester data={el} />
                  </AccordionDetails>
                </Accordion>
              ) : (
                ""
              )}
            </Typography>
          ))}
        </Typography>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Grid>
        <Grid item>
          <IconButton className={classes.backButton} onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h3">Специалност: {major}</Typography>
          <Typography variant="h4" className={classes.title}>
            Семестри
          </Typography>
        </Grid>
        <Grid item>
          <List>
            {[...new Array(semesters || 0)].map((_el, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => setCurrentSemester(index + 1)}>
                  <ListItemText>Семестър: {index + 1}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Subjects;
