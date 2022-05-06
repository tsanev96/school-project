import { useFetchHTTP } from "../../hooks/useFetchHTTP";
import { Faculty } from "../../types/faculty";
import ListItems from "../shared/ListItems";

const Faculties = () => {
  const { data } = useFetchHTTP<Faculty[]>("faculties", []);

  return <ListItems data={data} />;
};

export default Faculties;
