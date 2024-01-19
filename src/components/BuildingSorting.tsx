import { useAppDispatch, useAppSelector } from "../hooks";
import { Building, setCurrentSorting } from "../store/buildings";

type Sorting = {
  key: keyof Building;
  text: string;
};

const SORTINGS: Sorting[] = [
  {
    key: "carbon_emission_per_square_meter",
    text: "kg eq. CO2 / m2",
  },
  {
    key: "surface",
    text: "Building Surface",
  },
] as const;

function BuildingSorting() {
  const dispatch = useAppDispatch();
  const currentSorting = useAppSelector(
    (state) => state.buildings.currentSorting
  );
  return (
    <section className="relative w-full">
      <label
        htmlFor="filter"
        className="absolute -top-3 left-3 max-w-full w-56 "
      >
        <span className="inline-block text-xs bg-white text-neutral-500 rounded p-0.5 max-w-full w-56">
          Sort by
        </span>
      </label>
      <select
        name="filter"
        className="w-full max-w-72 rounded bg-neutral-100 p-2 pt-4 focus:outline-none focus:ring focus:ring-vizcab-200 text-base"
        onChange={(event) => {
          console.log(event.target.value);
          dispatch(setCurrentSorting(event.target.value as keyof Building));
        }}
        value={currentSorting}
      >
        {SORTINGS.map((sorting: Sorting) => (
          <option
            className="text-xs rounded"
            key={sorting.key}
            value={sorting.key}
          >
            {sorting.text}
          </option>
        ))}
      </select>
    </section>
  );
}

export default BuildingSorting;
