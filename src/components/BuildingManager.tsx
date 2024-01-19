import BuildingCard from "./BuildingCard";
import BuildingSorting from "./BuildingSorting";
import { useAppSelector } from "../hooks";
import Loader from "./Loader";

export const NB_BY_PAGE = 10;

function BuildingManager() {
  const loading = useAppSelector((state) => state.buildings.loading);
  const buildings = useAppSelector((state) => state.buildings.buildings);
  const currentSorting = useAppSelector(
    (state) => state.buildings.currentSorting
  );

  const sortedBuildings = [...buildings].sort((a, b) =>
    a[currentSorting] > b[currentSorting] ? 1 : -1
  );

  if (loading)
    return (
      <>
        <BuildingSorting />
        <Loader />
      </>
    );

  return (
    <>
      <BuildingSorting />
      {buildings.length === 0 ? (
        <p>No buildings found.</p>
      ) : (
        <>
          <section className="grid gap-5 flex-wrap pt-10 grid-cols-auto-fill-250">
            {sortedBuildings.map((building) => (
              <BuildingCard building={building} key={building.id} />
            ))}
          </section>
        </>
      )}
    </>
  );
}

export default BuildingManager;
