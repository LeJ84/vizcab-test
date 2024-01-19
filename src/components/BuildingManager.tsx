import BuildingCard from "./BuildingCard";
import BuildingSorting from "./BuildingSorting";
import Pagination from "./Pagination";
import { useAppSelector } from "../hooks";
import Loader from "./Loader";

export const NB_BY_PAGE = 10;

function BuildingManager() {
  const loading = useAppSelector((state) => state.buildings.loading);
  const buildings = useAppSelector((state) => state.buildings.buildings);
  const currentSorting = useAppSelector(
    (state) => state.buildings.currentSorting
  );
  const currentPage = useAppSelector((state) => state.buildings.currentPage);

  const sortedBuildings = [...buildings].sort((a, b) =>
    a[currentSorting] > b[currentSorting] ? 1 : -1
  );

  const startingIndex = (currentPage - 1) * NB_BY_PAGE;
  const paginatedBuildings = sortedBuildings.slice(
    startingIndex,
    startingIndex + NB_BY_PAGE
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
            {paginatedBuildings.map((building) => (
              <BuildingCard building={building} key={building.id} />
            ))}
          </section>
          <Pagination />
        </>
      )}
    </>
  );
}

export default BuildingManager;
