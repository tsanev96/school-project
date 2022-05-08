import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

type IListItems<T> = {
  data: T[];
};

const ListItems = <T extends { name: string; _id: string }>({
  data,
}: IListItems<T>) => {
  return (
    <List>
      {data.map((el) => (
        <Link to={el._id}>
          <ListItem key={el.name} disablePadding>
            <ListItemButton>
              <ListItemText>{el.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default ListItems;
