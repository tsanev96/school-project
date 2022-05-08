import TableSemester from "./component/TableSemester/TableSemester";
import TableSubject from "./component/TableSubject/TableSubject";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Faculties from "./component/Faculties/Factulties";

import { useState } from "react";
import Header from "./component/Header/Header";
import { FacultiesContext } from "./context/faculties";
import { useFetchHTTP } from "./hooks/useFetchHTTP";
import { IFacultySchemaWithId } from "../../server/src/models/faculty";
import SemestersList from "./component/SemestersList/SemestersList";

function App() {
  const { data } = useFetchHTTP<IFacultySchemaWithId[]>("faculties", []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <FacultiesContext.Provider value={data}>
          <Routes>
            {/* TODO nested routes  */}
            <Route path="faculties" element={<Faculties />} />
            <Route path="faculties/:id" element={<SemestersList />} />
          </Routes>
        </FacultiesContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
