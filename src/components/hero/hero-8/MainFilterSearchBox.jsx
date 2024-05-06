import PickupLocationBox from "@/components/kd/locations/PickupLocationBox";
import DateSearch from "../DateSearch";
import SearchBar from "../hero-1/LocationSearch";
import DiscountCodeInput from "/src/components/hero/hero-8/DiscountCodeInput.jsx";
import { useNavigate } from "react-router-dom";

const MainFilterSearchBox = () => {
  const navigate = useNavigate();
  let selectedLocation;
  return (
    <>
      <div className="mainSearch -col-5 -w-1070 mx-auto bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1">
        <div className="button-grid items-center">
          <div className="searchMenu-date px-20 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <PickupLocationBox  />
          </div>
          {/* End Pick Up Date */}

          <div className="searchMenu-date px-20 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Choose dates</h4>
              <DateSearch />
            </div>
          </div>
          {/* EndDrop off Date */}

          <div className="searchMenu-discountCode px-20 lg:py-20 lg:px-0">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Discount Code</h4>
              <DiscountCodeInput />
            </div>
          </div>
          {/* End Discount Code Input */}

          <div className="button-item">
            <button
              className="mainSearch__submit button  py-15 px-35 h-60 col-12 rounded-4 bg-dark-1 -blue-1 text-white"
              onClick={() => navigate("/car-list-v1")  /* TODO: pass state? */ }
            >
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
