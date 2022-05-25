import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  IconButton,
  List,
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
import { FC, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CourseCatalog from "../CourseCatalog/CourseCatalog";
import Wrapper from "../shared/Wrapper";

const useStyles = makeStyles({
  headline: {
    marginBottom: "30px !important",
  },
  semesters: {},
  majors: { paddingLeft: 16 },
  backButton: { marginBottom: 20 },
});

interface ISemesterList {
  data: SemesterData;
}

const SemestersList: FC<ISemesterList> = ({ data }) => {
  const classes = useStyles();
  const params = useParams();
  const [major, setMajor] = useState<
    { data: SemesterData; isCatalogOpen: boolean }[]
  >([]);

  const handleClick = (subjects: SemesterData[]) => {
    const sortedSemesters = subjects.sort(
      (a, b) => Number(a.semester) - Number(b.semester)
    );
    const dataToSet = sortedSemesters.map((el) => ({
      data: el,
      isCatalogOpen: false,
    }));
    setMajor(dataToSet);
  };

  const toggleCatalog = (courseName: string, open: boolean) => {
    const elementIndex = major.findIndex(
      (el) => el.data.courseName === courseName
    );
    const copiedMajor = [...major];
    copiedMajor[elementIndex].isCatalogOpen = open;
    setMajor(copiedMajor);
  };

  return (
    <FacultiesContext.Consumer>
      {(data) => {
        const faculty = data.find((fac) => fac._id === params.id);

        if (!faculty) {
          return <div>not found</div>;
        }

        // const isOpenCatalog = major.some((el) => el.isCatalogOpen);
        const isOpenCatalog = false;

        if (isOpenCatalog) {
          return major.map((el) => (
            <div>
              {el.isCatalogOpen && (
                <CourseCatalog
                  data={el.data}
                  onBack={() =>
                    toggleCatalog(el.data.courseName as string, false)
                  }
                />
              )}
            </div>
          ));
        }

        if (major && major.length) {
          return (
            <Wrapper>
              <Grid>
                <Grid item>
                  <IconButton
                    className={classes.backButton}
                    onClick={() => setMajor([])}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  {major.map((el) => (
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Semester: {el.data.semester}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Button
                          variant="contained"
                          onClick={() =>
                            toggleCatalog(el.data.courseName as string, true)
                          }
                        >
                          Open Catalog
                        </Button>
                        <TableSemester data={el.data} />
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Grid>
              </Grid>
            </Wrapper>
          );
        }

        return (
          <Wrapper>
            <List>
              <ListItemText className={classes.majors}>
                <Typography variant="h3">{faculty.name}</Typography>
                <Typography variant="h5">Специалности</Typography>
              </ListItemText>
              {faculty.majors.map((el) => (
                <ListItemButton onClick={() => handleClick(el.subjects)}>
                  {el}
                </ListItemButton>
              ))}
            </List>
          </Wrapper>
        );
      }}
    </FacultiesContext.Consumer>
  );
};

export default SemestersList;
