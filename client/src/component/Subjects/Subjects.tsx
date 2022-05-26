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
import HeadlineWithDesription from "../shared/HeadlineWithDescription";
import BackButton from "../shared/BackButton";

const useStyles = makeStyles({
  headline: {
    marginBottom: "30px !important",
  },
  semester: {
    marginBottom: "15px !important",
  },
  majors: { paddingLeft: 16 },
  backButton: { marginBottom: 20 },
  title: { marginBottom: 20 },
});

interface ISubjects extends Major {
  semesters: number;
  facultyName: string;
  onBack: () => void;
}

const Subjects: FC<ISubjects> = ({
  subjects,
  major,
  semesters,
  onBack,
  facultyName,
}) => {
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
          <BackButton
            className={classes.backButton}
            onBack={() => setCurrentSemester(0)}
          />
          <HeadlineWithDesription
            title={`${facultyName}`}
            description={`Специалност: ${major}`}
          />
          <Typography className={classes.semester}>
            Семестър: {currentSemester}
          </Typography>
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
          <BackButton onBack={onBack} />
          <HeadlineWithDesription
            title={`Специалност: ${major}`}
            description="Семестри"
          />
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
