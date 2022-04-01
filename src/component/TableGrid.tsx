import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

type Header = {
  id: string;
  label: string;
};

type Body = {
  id: string;
  value: string;
};

const useStyles = makeStyles({
  root: {
    maxWidth: 1020,
    margin: "0 auto",
  },
  item: {
    padding: "10px 15px",
    textAlign: "left",
  },
});

const TableGrid = () => {
  const classes = useStyles();

  const headerValues: Header[] = [
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

  const getIdsObject = <T extends { id: string }>(obj: T[]) =>
    Object.keys(obj).map((key) => obj[key].id);

  const colsHeaderIds = getIdsObject(headerValues);

  const renderCell = <T extends { id: string; label?: string; value?: string }>(
    id: string,
    elements: T[],
    index: number
  ) => {
    const element = elements.find((el) => el.id === id);
    return (
      <Grid className={classes.item} item xs={index === 0 ? 3 : 1} key={id}>
        {element?.label || element?.value || ""}
      </Grid>
    );
  };

  const renderTableTopPart = () => (
    <Grid container item>
      {colsHeaderIds.map((id, index) => (
        <>{renderCell(id, headerValues, index)}</>
      ))}

      {headerValues.map((el, index) => (
        <>{renderCell(el.id, bodyValues, index)}</>
      ))}
    </Grid>
  );

  return <Box className={classes.root}>{renderTableTopPart()}</Box>;
};

export default TableGrid;

const obj = {
  departament: "Software Computing",
  lang: "english",
  required: true,
  officeHours:
    "Please see instructor&#39;s office door for more updated information",
  content: "some content",
  objectives: ["1.", "2."],
  outcomeCourse: [
    "To able to comparison",
    "To be able to determine",
    "To be able to …",
    "To be able to",
    "To be able to know",
    "To calculate",
    "To …",
    "To …",
  ],
  topics: [
    { name: "Introduction", ceo: "2-3" },
    { name: "Stability", ceo: "2-3" },
    { name: "Cloud Development", ceo: "2-3" },
    { name: "Precipitation", ceo: "2-3" },
    { name: "Midtern", ceo: "2-3" },
  ],
  textBook: ["Ozdikililer E., 2021, Publishing, Bulgaria"],
  otherReferences: ["B R.G., C R.J.,, 2020, Cloud Systems.."],
  laboratoryWork: null,
  computerUsage: null,
  others: null,
};
