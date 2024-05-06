import PirceSlider from "../sidebar/PirceSlider";
import PassengersFilter from "../sidebar/PassengersFilter";
import CategorieFilters from "../sidebar/CategorieFilters";
import SpecificationsFilter from "../sidebar/SpecificationsFilter";
import TransmissionFilter from "../sidebar/TransmissionFilter";

const Sidebar = () => {
  return (
    <>

      <div className="sidebar__item -no-border position-relative">
        <h5 className="text-18 fw-500 mb-10">Car Category</h5>
        <div className="sidebar-checkbox">
          <CategorieFilters />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Category filter */}

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
      {/* End Price filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Luggage</h5>
        <div className="sidebar-checkbox">
          <SpecificationsFilter />
        </div>
      </div>
      {/* End Specifications filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Passengers</h5>
        <div className="sidebar-checkbox">
          <PassengersFilter />
        </div>
      </div>
      {/* End Passengers filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Transmission</h5>
        <div className="sidebar-checkbox">
          <TransmissionFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Transmission filter */}

    </>
  );
};

export default Sidebar;
