import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Head, Body } from "../types/table";
import { HTMLClass } from "../types/htmlClass";
import { useTableCellStyles } from "./styles";

interface ITableGrid extends HTMLClass {}

const useStyles = makeStyles({});

const TableTop: FC<ITableGrid> = () => {
  const classesCell = useTableCellStyles();

  const headValues: Head[] = [
    { id: "courseName", label: "Course Name" },
    { id: "code", label: "Code" },
    { id: "courseType", label: "Course Type" },
    { id: "semester", label: "Regular Semester" },
    { id: "credit", label: "Credit" },
    { id: "ects", label: "ECTS" },
    { id: "Lecture", label: "Lecture" },
    { id: "recitation", label: "Recitation" },
    { id: "lab", label: "lab" },
  ];

  const bodyValues: Body[] = [
    { id: "courseName", value: "Int. to Atmosphere science" },
    { id: "code", value: "MTO111/E" },
    { id: "courseType", value: "ED" },
    { id: "semester", value: "1" },
    { id: "credit", value: "2" },
    { id: "ects", value: "3" },
    { id: "Lecture", value: "3" },
    { id: "recitation", value: "0" },
    { id: "lab", value: "0" },
  ];

  const getColSpan = (index: number) => {
    return index === 0 ? 4 : 1;
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
      <Grid className={classesCell.row} item xs={getColSpan(index)} key={id}>
        {element?.label || element?.value || ""}
      </Grid>
    );
  };

  const renderTableTopPart = () => (
    <Grid container item>
      <Grid container item>
        {colsHeaderIds.map((id, index) => (
          <>{renderCell(id, headValues, index)}</>
        ))}
      </Grid>
      <Grid container item>
        {headValues.map((el, index) => (
          <>{renderCell(el.id, bodyValues, index)}</>
        ))}
      </Grid>
    </Grid>
  );

  return <Box>{renderTableTopPart()}</Box>;
};

export default TableTop;
