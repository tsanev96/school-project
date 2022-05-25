import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { FacultiesContext } from "../../context/faculties";
import TableSemester from "../TableSemester/TableSemester";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Wrapper from "../shared/Wrapper";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Subjects from "../Subjects/Subjects";
import { Major } from "../../../../server/src/models/faculty";
import NotFound from "../NotFound/NotFound";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const useStyles = makeStyles({
  accordion: {
    marginBottom: 10,
  },
});

const Majors = (props: any) => {
  const navigate = useNavigate();
  const [major, setMajor] = useState<Major | null>(null);
  const params = useParams();
  const classes = useStyles();

  return (
    <FacultiesContext.Consumer>
      {(data) => {
        const faculty = data.find((fac) => fac._id === params.id);

        if (!faculty) {
          return (
            <NotFound
              description={`Faculty with id ${params.id} does not exist`}
            />
          );
        } else if (major) {
          return (
            <Subjects
              {...major}
              semesters={faculty.semesters}
              onBack={() => setMajor(null)}
            />
          );
        }

        return (
          <Wrapper>
            <IconButton
              onClick={() => {
                console.log("clicked");
                navigate("../faculties", { replace: true });
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h2">{faculty.name}</Typography>
            <Typography variant="h4">Специалности</Typography>
            <List>
              {faculty.majors.map((major) => (
                <Typography key={major.major} component="div">
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => setMajor(major)}>
                      <ListItemText>{major.major}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Typography>
              ))}
            </List>
          </Wrapper>
        );
      }}
    </FacultiesContext.Consumer>
  );
};

export default Majors;
