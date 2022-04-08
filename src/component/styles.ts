import { makeStyles } from "@mui/styles";

export const useTableCellStyles = makeStyles({
  row: {
    padding: "7px 10px",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    "&:last-child": { borderRight: "none" },
  },
});
