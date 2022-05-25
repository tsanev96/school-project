import { Grid, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { SemesterData } from "../../types/semester";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.3)",
  },
  table: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: 0,
    width: 600,
    padding: 15,
    transform: "translate(-50%,-50%)",
    background: "#fff",
  },
  backButton: {
    marginBottom: 10,
  },
  rowLabel: {
    marginTop: 10,
    padding: 10,
    background: "#D3D3D3",
  },
  rowValue: {
    padding: 10,
  },
});

interface ICourseCatalog {
  data: SemesterData;
  onBack: () => void;
}

const CourseCatalog: FC<ICourseCatalog> = ({ onBack, data }) => {
  const classes = useStyles();

  const firstRow = [
    { label: "Code", value: data.code },
    { label: "Course Name", value: data.courseName },
    { label: "Language", value: data.language },
    { label: "Type", value: data.courseType },
  ];
  const secondRow = [
    { label: "credit", value: data.credit },
    { label: "ECTS", value: data.ects },
    { label: "Theoretical", value: data.theoretical },
    { label: "Tutorial", value: data.tutorial },
    { label: "lab", value: data.lab },
  ];

  const renderCell = (label: string, value: string) => {
    return (
      <Grid key={label} item xs>
        <Typography className={classes.rowLabel}>{label}</Typography>
        <Typography className={classes.rowValue}>{value}</Typography>
      </Grid>
    );
  };
  return (
    <Grid className={classes.root}>
      <Grid className={classes.table}>
        <Grid direction="column" container>
          <Grid item xs>
            <Grid container justifyContent="flex-end">
              <IconButton className={classes.backButton} onClick={onBack}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Typography variant="h4">Course Catalog</Typography>
          </Grid>
          <Grid container item xs>
            {firstRow.map(({ label, value }) =>
              renderCell(label, value as string)
            )}
          </Grid>
          <Grid container item xs>
            {secondRow.map(({ label, value }) =>
              renderCell(label, value as string)
            )}
          </Grid>
          <Grid container item xs>
            <Grid item xs={12} className={classes.rowLabel}>
              Course Prerequisites and Class Restriction
            </Grid>
            <Grid item xs={4} className={classes.rowValue}>
              Prerequisite
            </Grid>
            <Grid item xs={8} className={classes.rowValue}>
              {data.prerequisite}
            </Grid>
            <Grid item xs={4} className={classes.rowValue}>
              Class Restrictions
            </Grid>
            <Grid item xs={8} className={classes.rowValue}>
              {data.classRestrictions}
            </Grid>
          </Grid>
          <Grid container item xs>
            {renderCell("Description", data.description as string)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CourseCatalog;
