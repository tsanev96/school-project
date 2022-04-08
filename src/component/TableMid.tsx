import { Grid } from "@mui/material";
import { useTableCellStyles } from "./styles";

const TableMid = () => {
  const classesCell = useTableCellStyles();
  const data: {
    id: string;
    label: string;
    value: string | string[] | undefined;
  }[] = [
    { id: "deperament", label: "Department", value: "Software Computing" },
    { id: "lang", label: "Language", value: "english" },
    { id: "required", label: "Required/Elective", value: "Required" },
    {
      id: "officeHourse",
      label: "Office hours",
      value:
        "Please see instructor&#39;s office door for more updated information",
    },
    { id: "content", label: "Content", value: "some content" },
    {
      id: "objectives",
      label: "Objectives",
      value: ["objective 1", "objective 2"],
    },
    {
      id: "outcomeCourse",
      label: "Course Educational Outcomes",
      value: [
        "To able to comparison",
        "To be able to determine",
        "To be able to …",
        "To be able to",
        "To be able to know",
        "To calculate",
        "To …",
        "To …",
      ],
    },
    {
      id: "textBook",
      label: "Textbook",
      value: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
    },
    {
      id: "otherReferences",
      label: "Other References",
      value: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
    },
    { id: "laboratoryWork", label: "Laboratory Work", value: undefined },
    { id: "computerUsage", label: "Computer Usage", value: undefined },
    { id: "computerUsage", label: "Others", value: undefined },
  ];

  const getValueCol = (el: string | string[] | undefined) => {
    if (typeof el === "string") {
      return el;
    } else if (Array.isArray(el)) {
      return el.map((value) => (
        <Grid key={value} container>
          <Grid item>{value}</Grid>
        </Grid>
      ));
    }
    return "";
  };

  return (
    <Grid container>
      {data.map((el) => (
        <Grid container>
          <Grid className={classesCell.row} item xs={4}>
            {el.label}
          </Grid>
          <Grid className={classesCell.row} container item xs={8}>
            {getValueCol(el.value)}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default TableMid;
