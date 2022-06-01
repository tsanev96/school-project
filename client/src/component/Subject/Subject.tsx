import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FC, useState } from "react";
import Wrapper from "../shared/Wrapper";
import { Major } from "../../../../server/src/models/faculty";
import HeadlineWithDesription from "../shared/HeadlineWithDescription";
import BackButton from "../shared/BackButton";
import Semester from "../Semester/Semester";

interface ISubjects extends Major {
  semesters: number;
  facultyName: string;
  onBack: () => void;
}

const Subject: FC<ISubjects> = ({
  subjects,
  major,
  semesters,
  onBack,
  facultyName,
}) => {
  const [currentSemester, setCurrentSemester] = useState(0);

  if (currentSemester) {
    return (
      <Semester
        subjects={subjects}
        facultyName={facultyName}
        major={major}
        currentSemester={currentSemester}
        onBack={() => setCurrentSemester(0)}
      />
    );
  }

  return (
    <Wrapper>
      <Grid>
        <Grid item>
          <BackButton onBack={onBack} />
          <HeadlineWithDesription title={`Специалност: ${major}`} />
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

export default Subject;
