import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFetchHTTP } from "../../hooks/useFetchHTTP";
import Wrapper from "../shared/Wrapper";

const Universities = () => {
  const { data } = useFetchHTTP<
    { name: string; faculties: string[]; _id: string }[]
  >("universities", []);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Typography variant="h4">Университети</Typography>
      <List>
        {data
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
