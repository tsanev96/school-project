import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFetchHTTP } from "../../hooks/useFetchHTTP";
import ListItems from "../shared/ListItems";

const Universities = () => {
  const { data } = useFetchHTTP<
    { name: string; faculties: string[]; _id: string }[]
  >("universities", []);
  const navigate = useNavigate();

  return (
    <List>
      {data.map((el) => (
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
  );
};
Universities;
export default Universities;
