import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Faculties from "./component/Faculties/Factulties";
import Header from "./component/Header/Header";
import { FacultiesContext } from "./context/faculties";
import { useFetchHTTP } from "./hooks/useFetchHTTP";
import { IFacultySchemaWithId } from "../../server/src/models/faculty";
import Universities from "./component/Universities/Universities";
import Faculty from "./component/Faculty/Faculty";
import Majors from "./component/Majors/Majors";

function App() {
  const { data } = useFetchHTTP<IFacultySchemaWithId[]>("faculties", []);

  return (
    <BrowserRouter>
      <Header />
      <FacultiesContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Universities />} />
          <Route path="faculties" element={<Faculties />} />
          <Route path="/faculties/:id" element={<Faculty />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/majors" element={<Majors />} />
        </Routes>
      </FacultiesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
