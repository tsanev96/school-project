import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useFetchHTTP } from "../../hooks/useFetchHTTP";
import { Faculty } from "../../types/faculty";
import ListItems from "../shared/ListItems";

const Universities = () => {
  const { data } = useFetchHTTP<Faculty[]>("universities", []);

  return <ListItems data={data} />;
};
Universities;
export default Universities;
