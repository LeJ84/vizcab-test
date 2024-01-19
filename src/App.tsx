import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuildingManager from "./components/BuildingManager";
import BuildingDetails from "./components/BuildingDetails";
import Layout from "./components/Layout";

import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { fetchBuildings } from "./store/buildings";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBuildings());
  }, [dispatch]);

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
