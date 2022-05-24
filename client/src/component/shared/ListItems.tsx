import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

type IListItems<T> = {
  data: T[];
  children?: JSX.Element;
};

const ListItems = <T extends { name: string; _id: string }>({
  data,
  children,
}: IListItems<T>) => {
  const navigate = useNavigate();

  return (
    <>
      {children}
      <List>
        {data.map((el) => (
          <ListItem key={el.name} disablePadding>
            <ListItemButton onClick={() => navigate(el._id)}>
              <ListItemText>{el.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListItems;
