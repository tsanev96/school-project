import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

type IListItems<T> = {
  data: T[];
};

const ListItems = <T extends { name: string }>({ data }: IListItems<T>) => {
  return (
    <List>
      {data.map((el) => (
        <ListItem key={el.name} disablePadding>
          <ListItemButton>
            <ListItemText>{el.name}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ListItems;
