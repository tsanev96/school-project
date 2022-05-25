import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import { SemesterData } from "../../types/semester";
import SemestersList from "../SemestersList/SemestersList";

const useStyles = makeStyles({
  accordion: {
    marginBottom: 10,
  },
});

const Majors = (props: any) => {
  //   const [test, setTest] = useState<SemesterData>([]);
  const params = useParams();
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <FacultiesContext.Consumer>
      {(data) => {
        const faculty = data.find((fac) => fac._id === params.id);

        if (!faculty) {
          return <div>not found</div>;
        }

        const showTableSemester = () => {
          props.router.push({
            pathname: "/major",
            state: {
              id: 7,
              color: "green",
            },
          });
        };

        // if (test) {
        //   <SemestersList data={test} />;
        // }

        return (
          <Wrapper>
            <List>
              {faculty.majors.map((major) => (
                <div>
                  {major.subjects.map((el) => (
                    <ListItem disablePadding>
                      <ListItemButton
                      // onClick={() => setTest(major.information)}
                      >
                        <ListItemText>{el.courseName}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </div>
              ))}
            </List>
          </Wrapper>
        );
        // return (
        //   <>
        //     {faculty.major.map((el) => (
        //       <>
        //         <div>
        //           {el.information.map((major) => (
        //             <Wrapper>
        //               <Accordion className={classes.accordion}>
        //                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        //                   <Typography>{major.courseName}</Typography>
        //                 </AccordionSummary>
        //                 <AccordionDetails>
        //                   {/* <TableSemester data={major} /> */}

        //                 </AccordionDetails>
        //               </Accordion>
        //             </Wrapper>
        //           ))}
        //         </div>
        //       </>
        //     ))}
        //   </>
        // );
      }}
    </FacultiesContext.Consumer>
  );
};

export default Majors;
