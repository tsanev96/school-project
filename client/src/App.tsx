import TableSemester from "./component/TableSemester/TableSemester";
import TableSubject from "./component/TableSubject/TableSubject";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Faculties from "./component/Faculties/Factulties";

import { useState } from "react";
import Header from "./component/Header/Header";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="course" element={<TableSemester />} /> */}
          <Route path="course" element={<TableSemester />} />
          <Route path="faculties" element={<Faculties />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
