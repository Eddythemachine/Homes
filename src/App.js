// @ts-nocheck
import "./App.css";
import Homecontainer from "./Components/Home/Homecontainer.jsx";
import Navbar from "./Components/Navbar/Navbar";
import Sectioncontainer from "./Components/Section container/Sectioncontainer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index={true} element={<Homecontainer />} />
        <Route path="/villa" element={<Sectioncontainer />} />
      </Route>
    </Routes>
  );
}

export default App;
