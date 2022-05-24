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
        if (university && universityId) {
          const specificFaculties = data.filter(
            (el) => String(el.university._id) === university._id
          );

          if (!specificFaculties.length) {
            return <NotFound />;
          }

          return (
            <>
              <Typography variant="h4">{university.name}</Typography>
              <List>
                {specificFaculties.map((el) => (
                  <ListItem key={el.name} disablePadding>
                    <ListItemButton onClick={() => navigate("faculties")}>
                      <ListItemText>{el.name}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </>
          );
        }

        return <ListItems data={data} />;
      }}
    </FacultiesContext.Consumer>
  );
};

export default Faculties;
