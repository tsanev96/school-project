import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { FacultiesContext } from "../../context/faculties";
import Wrapper from "../shared/Wrapper";
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import Subject from "../Subject/Subject";
import { Major } from "../../../../server/src/models/faculty";
import NotFound from "../NotFound/NotFound";
import HeadlineWithDesription from "../shared/HeadlineWithDescription";
import BackButton from "../shared/BackButton";

const useStyles = makeStyles({
  accordion: {
    marginBottom: 10,
  },
});

const Faculty = () => {
  const navigate = useNavigate();
  const [major, setMajor] = useState<Major | null>(null);
  const params = useParams();

  const faculties = useContext(FacultiesContext);

  const faculty = faculties.find((fac) => fac._id === params.id);

  if (!faculty) {
    return (
      <NotFound description={`Faculty with id ${params.id} does not exist`} />
    );
  } else if (major) {
    return (
      <Subject
        {...major}
        semesters={faculty.semesters}
        onBack={() => setMajor(null)}
        facultyName={faculty.name}
      />
    );
  }

  return (
    <Wrapper>
      <BackButton onBack={() => navigate("../faculties", { replace: true })} />
      <HeadlineWithDesription
        title={`${faculty.name}, гр.${faculty.city}`}
        description="Специалности"
      />
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
};

export default Faculty;
