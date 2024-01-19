import { Building } from "../store/buildings";
import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IconContext } from "react-icons";

interface BuildingCardProps {
  building: Building;
}

function BuildingCard({ building }: BuildingCardProps) {
  const { id, name, address, postcode, city } = building;
  const navigate = useNavigate();
  return (
    <article className="w-60 max-w-full bg-vizcab-200 rounded p-4 flex flex-col justify-between gap-4">
      <header className="bg-white rounded px-2 py-1 inline-block text-base capitalize">
        {name}
      </header>
      <main className="text-xs">
        {address}
        <br />
        {postcode} {city}
      </main>
      <footer className="text-right">
        <button
          className="bg-vizcab-800 text-white rounded text-sm px-1 py-1/2 uppercase items-center gap-1 inline-flex hover:scale-105 hover:opacity-75"
          onClick={() => {
            navigate(`/${id}`);
          }}
        >
          <IconContext.Provider value={{ className: "fill-white" }}>
            <IoMdEye />
          </IconContext.Provider>{" "}
          Details
        </button>
      </footer>
    </article>
  );
}

export default BuildingCard;
