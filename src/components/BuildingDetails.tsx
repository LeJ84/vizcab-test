import { useAppSelector } from "../hooks";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Loader from "../components/Loader";

function BuildingDetails() {
  const { buildingId } = useParams();

  const building = useAppSelector((state) =>
    state.buildings.buildings.find(
      (building) => building.id === Number(buildingId)
    )
  );
  const loading = useAppSelector((state) => state.buildings.loading);

  if (loading) {
    return <Loader />;
  }

  if (!building) {
    return <div>404 - Building not found</div>;
  }

  return (
    <>
      <header className="font-bold text-2xl mb-8">{building.name}</header>
      <main>
        <dl className="font-bold text-lg leading-5">
          <dt>Address</dt>
          <dd className="font-normal text-lg leading-4 mb-4">
            {building.address}
            <br />
            {building.postcode} {building.city}
          </dd>
          <dt>Surface(m2)</dt>
          <dd className="font-normal text-lg leading-4 mb-4">
            {building.surface}
          </dd>
          <dt>Carbon emission (kg eq. CO2)</dt>
          <dd className="font-normal text-lg leading-4 mb-4">
            {building.carbon_emission}
          </dd>
          <dt>Carbon emission per square meter (kg eq. CO2/m2)</dt>
          <dd className="font-normal text-lg leading-4 mb-4">
            {building.carbon_emission_per_square_meter}
          </dd>
        </dl>
      </main>
      <footer>
        <Link className="flex items-center text-lg hover:opacity-50" to="/">
          <IoMdArrowBack /> back
        </Link>
      </footer>
    </>
  );
}

export default BuildingDetails;
