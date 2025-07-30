import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import Error404 from "./Components/Other/Error404";
import Sponsors from "./Pages/Sponsors";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/gallery" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
