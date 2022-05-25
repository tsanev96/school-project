import { FacultiesContext } from "../../context/faculties";
import ListItems from "../shared/ListItems";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useFetchHTTP } from "../../hooks/useFetchHTTP";
import { University } from "../../types/university";
import Wrapper from "../shared/Wrapper";

const Faculties = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const querySearch = decodeURIComponent(location.search.substring(1));
  const parts = querySearch.split("=");
  const universityId = parts[1];

  const { data: university } = useFetchHTTP<University | null>(
    `universities/${universityId}`,
    null
  );

  return (
    <FacultiesContext.Consumer>
      {(data) => {
        const renderOneFaculty = (uni: University) => {
          const specificFaculties = data.filter(
            (el) => String(el.university._id) === uni._id
          );

          if (!specificFaculties.length) {
            return <NotFound />;
          }

          return (
            <Wrapper>
              <Typography variant="h4">{uni.name}</Typography>
              <List>
                {specificFaculties.map((el) => (
                  <ListItem key={el.name} disablePadding>
                    <ListItemButton onClick={() => navigate(el._id)}>
                      <ListItemText>{el.name}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Wrapper>
          );
        };

        const renderAllFaculties = () => {
          return (
            <Wrapper>
              <Typography variant="h4">Факултети</Typography>
              <ListItems data={data} />
            </Wrapper>
          );
        };

        if (university && universityId) {
          return renderOneFaculty(university);
        }

        return renderAllFaculties();
      }}
    </FacultiesContext.Consumer>
  );
};

export default Faculties;
