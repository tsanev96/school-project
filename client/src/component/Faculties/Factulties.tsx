import { FacultiesContext } from "../../context/faculties";
import ListItems from "../shared/ListItems";
import { useLocation, useNavigate } from "react-router-dom";
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
import { useContext, useState } from "react";
import CustomSelect from "../shared/CustomSelect";
import http from "../../network/http";
import { useEffect } from "react";
import BackButton from "../shared/BackButton";
import SearchBox from "../shared/SearchBox";
import { startsWith } from "../../utils/startsWith";

const Faculties = () => {
  const [currentCity, setCurrentCity] = useState<string>("всички");
  const [university, setUniversity] = useState<University>();
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const faculties = useContext(FacultiesContext);

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

  const setFacultyCities = () => {
    const cities: string[] = [];
    faculties.forEach(
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
    if (city === "всички" && searchQuery) {
      return faculties.filter((el) => startsWith(el.name, searchQuery));
    } else if (city === "всички") {
      return faculties;
    }

    const facultiesInSpecificTown = faculties.filter(
      (el) => el.city.toLowerCase() === city.toLowerCase()
    );

    if (searchQuery) {
      return facultiesInSpecificTown.filter((el) =>
        startsWith(el.name, searchQuery)
      );
    }
    return facultiesInSpecificTown;
  };

  const renderFacultiesFromSpecificUni = (uni: University) => {
    let specificFaculties = faculties.filter(
      (el) => String(el.university._id) === uni._id
    );

    if (searchQuery) {
      specificFaculties = specificFaculties.filter((el) =>
        startsWith(el.name, searchQuery)
      );
    }

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

    console.log("specific", specificFaculties);
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
    console.log("all", facultiesToDisplay);
    return (
      <Wrapper>
        <Grid container justifyContent="space-between">
          <Typography variant="h4">Факултети</Typography>
          <Typography>
            <Grid container direction="row">
              <CustomSelect
                label="Градове"
                data={cities}
                onHandleCityChange={handleCityChange}
              />
              <Typography style={{ marginLeft: 10 }}>
                <SearchBox
                  onChange={setSearchQuery}
                  placeholder="търси факултет.."
                />
              </Typography>
            </Grid>
          </Typography>
        </Grid>
        <ListItems data={facultiesToDisplay} />
      </Wrapper>
    );
  };

  if (university && universityId) {
    return renderFacultiesFromSpecificUni(university);
  }

  return renderAllFaculties();
};

export default Faculties;
