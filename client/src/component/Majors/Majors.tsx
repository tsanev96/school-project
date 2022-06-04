import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { Major } from "../../../../server/src/models/faculty";
import { FacultiesContext } from "../../context/faculties";
import { startsWith } from "../../utils/startsWith";
import SearchBox from "../shared/SearchBox";
import Wrapper from "../shared/Wrapper";
import Subject from "../Subject/Subject";

const Majors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentMajor, setCurrentMajor] = useState<{
    major: Major;
    facultyName: string;
    semesters: number;
  } | null>(null);
  const faculties = useContext(FacultiesContext);

  const allMajors: {
    major: Major;
    facultyName: string;
    semesters: number;
  }[] = [];

  faculties.forEach((el) => {
    el.majors.forEach((major) => {
      if (searchQuery) {
        if (startsWith(major.major, searchQuery)) {
          allMajors.push({
            major,
            facultyName: el.name,
            semesters: el.semesters,
          });
        }
      } else {
        allMajors.push({
          major,
          facultyName: el.name,
          semesters: el.semesters,
        });
      }
    });
  });

  if (currentMajor) {
    return (
      <Subject
        major={currentMajor.major.major}
        subjects={currentMajor.major.subjects}
        facultyName={currentMajor.facultyName}
        semesters={currentMajor.semesters}
        onBack={() => setCurrentMajor(null)}
      />
    );
  }

  return (
    <Wrapper>
      <Grid container justifyContent="space-between">
        <Typography variant="h4">Специалности</Typography>
        <Typography>
          <Grid container direction="row">
            <Typography style={{ marginLeft: 10 }}>
              <SearchBox
                onChange={setSearchQuery}
                placeholder="търси специалност.."
              />
            </Typography>
          </Grid>
        </Typography>
      </Grid>

      <List>
        {allMajors.map((el) => (
          <ListItem disablePadding>
            <ListItemButton onClick={() => setCurrentMajor(el)}>
              <ListItemText>{el.major.major}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default Majors;
