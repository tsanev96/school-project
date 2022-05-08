import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { FacultiesContext } from "../../context/faculties";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableSemester from "../TableSemester/TableSemester";

const SemestersList = () => {
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
          <>
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
          </>
        );
      }}
    </FacultiesContext.Consumer>
  );
};

export default SemestersList;
