import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC, useState } from "react";
import { SemesterData } from "../../types/semester";
import CourseCatalog from "../CourseCatalog/CourseCatalog";
import BackButton from "../shared/BackButton";
import HeadlineWithDesription from "../shared/HeadlineWithDescription";
import Wrapper from "../shared/Wrapper";
import TableSemester from "../TableSemester/TableSemester";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ISemester {
  onBack: () => void;
  facultyName: string;
  major: string;
  currentSemester: number;
  subjects: SemesterData[];
}

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

const Semester: FC<ISemester> = ({
  facultyName,
  major,
  subjects,
  currentSemester,
  onBack,
}) => {
  const classes = useStyles();
  const [catalog, setCatalog] = useState<SemesterData | null>(null);

  if (catalog) {
    return <CourseCatalog data={catalog} onBack={() => setCatalog(null)} />;
  }

  return (
    <Wrapper>
      <Typography component="div">
        <BackButton className={classes.backButton} onBack={onBack} />
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
};

export default Semester;
