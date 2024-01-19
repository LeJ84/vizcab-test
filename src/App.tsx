import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuildingManager from "./components/BuildingManager";
import BuildingDetails from "./components/BuildingDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BuildingManager />} />
          <Route path="/:buildingId" element={<BuildingDetails />} />
          <Route path="/*" element={<BuildingManager />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
