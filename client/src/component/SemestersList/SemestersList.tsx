import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { FacultiesContext } from "../../context/faculties";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableSemester from "../TableSemester/TableSemester";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "70%",
    margin: "0 auto",
  },
  headline: {
    marginBottom: "30px !important",
  },
});

const SemestersList = () => {
  const classes = useStyles();
  const params = useParams();

  return (
    <FacultiesContext.Consumer>
      {(data) => {
        const faculty = data.find((fac) => fac._id === params.id);

        if (!faculty) {
          return <div>not found</div>;
        }

        const sortedSemesters = faculty.information.sort(
          (a, b) => Number(a.semester.value) - Number(b.semester.value)
        );

        return (
          <Grid className={classes.root}>
            <Typography className={classes.headline} variant="h4">
              {faculty.major.value}
            </Typography>
            {sortedSemesters.map((el) => (
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Semester: {el.semester.value}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableSemester data={el} />
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        );
      }}
    </FacultiesContext.Consumer>
  );
};

export default SemestersList;
