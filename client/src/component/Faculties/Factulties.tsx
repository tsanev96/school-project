import { FacultiesContext } from "../../context/faculties";
import ListItems from "../shared/ListItems";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { University } from "../../types/university";
import Wrapper from "../shared/Wrapper";
import { useState } from "react";
import { IFacultySchemaWithId } from "../../../../server/src/models/faculty";
import CustomSelect from "../shared/CustomSelect";
import http from "../../network/http";
import { useEffect } from "react";
import BackButton from "../shared/BackButton";

const Faculties = () => {
  const [currentCity, setCurrentCity] = useState<string>("всички");
  const [university, setUniversity] = useState<University>();
  const location = useLocation();
  const navigate = useNavigate();

  const querySearch = decodeURIComponent(location.search.substring(1));
  const parts = querySearch.split("=");
  const universityId = parts[1];

  useEffect(() => {
    const fetchUniversity = async () => {
      if (!universityId) return;
      const { data } = await http.get<University>(
        `http://localhost:4000/api/universities/${universityId}`
      );
      if (data) {
        setUniversity(data);
      }
    };

    fetchUniversity();
  }, [universityId]);

  return (
    <FacultiesContext.Consumer>
      {(data) => {
        const setFacultyCities = () => {
          const cities: string[] = [];
          data.forEach(
            (el) =>
              !cities.includes(el.city.toLowerCase()) &&
              cities.push(el.city.toLowerCase())
          );
          cities.unshift("всички");
          return cities;
        };

        const cities = setFacultyCities();

        const handleCityChange = (city: string) => {
          setCurrentCity(city);
          showFacultiesFromSpecificCities(city);
        };

        const showFacultiesFromSpecificCities = (city: string) => {
          if (city === "всички") {
            return data;
          }

          const facultiesInSpecificTown: IFacultySchemaWithId[] = [];
          data.forEach(
            (el) =>
              el.city.toLowerCase() === city.toLowerCase() &&
              facultiesInSpecificTown.push(el)
          );
          return facultiesInSpecificTown;
        };

        const renderFacultiesFromSpecificUni = (uni: University) => {
          const specificFaculties = data.filter(
            (el) => String(el.university._id) === uni._id
          );

          if (!specificFaculties.length) {
            return (
              <>
                <BackButton
                  onBack={() => navigate("../universities", { replace: true })}
                />
                <NotFound />;
              </>
            );
          }

          return (
            <Wrapper>
              <BackButton
                onBack={() => navigate("../universities", { replace: true })}
              />
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

        const facultiesToDisplay = showFacultiesFromSpecificCities(currentCity);

        const renderAllFaculties = () => {
          return (
            <Wrapper>
              <Grid container justifyContent="space-between">
                <Typography variant="h4">Факултети</Typography>
                <>
                  <CustomSelect
                    label="Градове"
                    data={cities}
                    onHandleCityChange={handleCityChange}
                  />
                </>
              </Grid>
              <ListItems data={facultiesToDisplay} />
            </Wrapper>
          );
        };

        if (university && universityId) {
          return renderFacultiesFromSpecificUni(university);
        }

        return renderAllFaculties();
      }}
    </FacultiesContext.Consumer>
  );
};

export default Faculties;
