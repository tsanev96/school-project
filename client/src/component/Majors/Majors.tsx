import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  return (
    <FacultiesContext.Consumer>
      {(data) => {
        const allMajors: {
          major: Major;
          facultyName: string;
          semesters: number;
        }[] = [];

        data.forEach((el) => {
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
            <SearchBox
              onChange={setSearchQuery}
              placeholder="търси специалност.."
            />
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
      }}
    </FacultiesContext.Consumer>
  );
};

export default Majors;
