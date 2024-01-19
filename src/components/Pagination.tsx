import { useAppDispatch, useAppSelector } from "../hooks";
import { setCurrentPage } from "../store/buildings";
import { NB_BY_PAGE } from "./BuildingManager";

function Pagination() {
  const dispatch = useAppDispatch();
  const nbBuildings = useAppSelector(
    (state) => state.buildings.buildings.length
  );
  const currentPage = useAppSelector((state) => state.buildings.currentPage);

  return (
    <div className="text-center flex justify-center gap-2 items-center">
      <button
        className="bg-vizcab-800 text-white rounded px-2 py-1 uppercase items-center gap-1 inline-flex hover:scale-105 hover:opacity-75 font-bold disabled:opacity-25"
        onClick={() => {
          dispatch(setCurrentPage(currentPage - 1));
        }}
        disabled={currentPage === 1}
      >
        {"<<"}
      </button>
      <button
        className="bg-vizcab-800 text-white rounded px-2 py-1 uppercase items-center gap-1 inline-flex hover:scale-105 hover:opacity-75 font-bold disabled:opacity-25"
        onClick={() => {
          dispatch(setCurrentPage(currentPage - 1));
        }}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      Page {currentPage} of {nbBuildings / NB_BY_PAGE}
      <button
        className="bg-vizcab-800 text-white rounded px-2 py-1 uppercase items-center gap-1 inline-flex hover:scale-105 hover:opacity-75 font-bold disabled:opacity-25"
        onClick={() => {
          dispatch(setCurrentPage(currentPage + 1));
        }}
        disabled={currentPage === Math.round(nbBuildings / NB_BY_PAGE)}
      >
        {">"}
      </button>
      <button
        className="bg-vizcab-800 text-white rounded px-2 py-1 uppercase items-center gap-1 inline-flex hover:scale-105 hover:opacity-75 font-bold disabled:opacity-25"
        onClick={() => {
          dispatch(setCurrentPage(Math.round(nbBuildings / NB_BY_PAGE)));
        }}
        disabled={currentPage === Math.round(nbBuildings / NB_BY_PAGE)}
      >
        {">>"}
      </button>
    </div>
  );
}

export default Pagination;
