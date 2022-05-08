import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

type IListItems<T> = {
  data: T[];
};

const ListItems = <T extends { name: string; _id: string }>({
  data,
}: IListItems<T>) => {
  return (
    <List>
      {data.map((el) => (
        <NavLink to={el._id}>
          <ListItem key={el.name} disablePadding>
            <ListItemButton>
              <ListItemText>{el.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};

export default ListItems;
