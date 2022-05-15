import { useParams } from "react-router-dom";
import { FacultiesContext } from "../../context/faculties";
import { SemesterData } from "../../types/semester";
import ListItems from "../shared/ListItems";

const Majors = () => {
    const params = useParams();

    return (
        <FacultiesContext.Consumer>
            {(data) => {
                const faculty = data.find((fac) => fac._id === params.id);

                if (!faculty) {
                    return <div>not found</div>;
                }

                // const sortedSemesters = faculty.major.inform.sort(
                //   (a, b) => Number(a.semester.value) - Number(b.semester.value)
                // );



                return (
                    <>
                        {faculty.major.map(el => (
                            <>
                                <div>
                                    {el.information.map(major =>
                                        <div>hg</div>
                                        // <Accordion>
                                        //     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        //         <Typography>Semester: {major.semester.value}</Typography>
                                        //     </AccordionSummary>
                                        //     <AccordionDetails>
                                        //         <TableSemester data={major} />
                                        //     </AccordionDetails>
                                        // </Accordion>
                                    )}
                                </div>
                            </>
                        ))}
                    </>
                );
            }}
        </FacultiesContext.Consumer>
    );
};

export default Majors;
