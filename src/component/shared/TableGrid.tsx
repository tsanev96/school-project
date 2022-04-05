import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Head, Body } from "../../types/table";
import { HTMLClass } from "../../types/htmlClass";

interface ITableGrid extends HTMLClass {
  headValues: Head[];
  bodyValues: Body[];
  firstColSpan?: number;
}

const useStyles = makeStyles({});

const TableGrid: FC<ITableGrid> = ({
  headValues,
  bodyValues,
  firstColSpan,
  className = "",
}) => {
  const classes = useStyles();

  const getColSpan = (index: number, span?: number) => {
    if (span) {
      return index === 0 ? span : 1;
    }
    return undefined;
  };
  const getIdsObject = <T extends { id: string }>(arr: T[]) =>
    arr.map((el) => el.id);

  const colsHeaderIds = getIdsObject(headValues);

  const renderCell = <T extends { id: string; label?: string; value?: string }>(
    id: string,
    elements: T[],
    index: number
  ) => {
    const element = elements.find((el) => el.id === id);
    return (
      <Grid item xs={getColSpan(index, firstColSpan)} key={id}>
        {element?.label || element?.value || ""}
      </Grid>
    );
  };

  const renderTableTopPart = () => (
    <Grid className={className} container item>
      {colsHeaderIds.map((id, index) => (
        <>{renderCell(id, headValues, index)}</>
      ))}
      {headValues.map((el, index) => (
        <>{renderCell(el.id, bodyValues, index)}</>
      ))}
    </Grid>
  );

  return <Box>{renderTableTopPart()}</Box>;
};

export default TableGrid;
