import { FacultiesContext } from "../../context/faculties";
import ListItems from "../shared/ListItems";

const Faculties = () => {
  return (
    <FacultiesContext.Consumer>
      {(data) => <ListItems data={data} />}
    </FacultiesContext.Consumer>
  );
};

export default Faculties;
