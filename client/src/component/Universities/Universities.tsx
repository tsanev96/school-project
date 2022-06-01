import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchHTTP } from "../../hooks/useFetchHTTP";
import SearchBox from "../shared/SearchBox";
import Wrapper from "../shared/Wrapper";

const Universities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useFetchHTTP<
    { name: string; faculties: string[]; _id: string }[]
  >("universities", []);
  const navigate = useNavigate();

  let universities = [...data];

  if (searchQuery) {
    universities = universities.filter((el) =>
      el.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }

  return (
    <Wrapper>
      <Grid container justifyContent="space-between">
        <Typography variant="h4">Университети</Typography>
        <SearchBox
          onChange={setSearchQuery}
          placeholder="търси университети.."
        />
      </Grid>
      <List>
        {universities
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((el) => (
            <ListItem key={el.name} disablePadding>
              <ListItemButton
                onClick={() =>
                  navigate(`../faculties?uni=${el._id}`, { replace: true })
                }
              >
                <ListItemText>{el.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Wrapper>
  );
};

export default Universities;
