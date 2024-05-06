import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import MainFilterSearchBox from "@/components/car-list/car-list-v1/MainFilterSearchBox";
import TopHeaderFilter from "@/components/car-list/car-list-v1/TopHeaderFilter";
import Pagination from "@/components/car-list/common/Pagination";
import Sidebar from "@/components/car-list/car-list-v1/Sidebar";
import CarPropertes from "@/components/car-list/car-list-v1/CarPropertes";

import MetaComponent from "@/components/common/MetaComponent";
import { useEffect, useState } from "react";
import { loadVehicleClasses } from "@/services/apis/vehicle.api";

const metadata = {
  title: "Search Results - Key Car Rental Iceland",
  description: "Find your perfect car in Iceland",
};

const CarListPage1 = () => {


  const [ vehicles, setVehicles ] = useState([])

  const loadData = async () => {

    try {

      const data = {
        DateTo: null, // set based on MainFilterSearchBox->DateSearch
        DateFrom: null, // set based on MainFilterSearchBox->DateSearch,
        PickupLocationId: null, // set based on MainFilterSearchBox->PickupLocationBox
      }
      const {Classes = false} =  await loadVehicleClasses(data);
      if(!Classes) throw new Error('Error While Loading Vehicle');

      setVehicles(Classes)

      
    } catch (error) {

      console.log(error);
      
    }

  }


  useEffect(() => {
    loadData()
  },[])


  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End DefaultHeader */}

      <section className="pt-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 fw-600">Key Car Rental - Keflavík Airport</h1>
                <br />
              </div>
              {/* End text-center */}
              <MainFilterSearchBox />
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>
              {/* End sidebar for desktop */}

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Hotels
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter totalSearchResult={vehicles.length} />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
                <CarPropertes vehicles={vehicles}  />
              </div>
              {/* End .row */}
              <Pagination />
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <DefaultFooter />
    </>
  );
};

export default CarListPage1;
