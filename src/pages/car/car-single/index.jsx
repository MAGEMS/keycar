import "photoswipe/dist/photoswipe.css";
import carsData from "@/data/cars";
import DefaultHeader from "@/components/header/default-header";
import Overview from "@/components/car-single/Overview";
import PropertyHighlights from "@/components/car-single/PropertyHighlights";
import DefaultFooter from "@/components/footer/default";
import SlideGallery from "@/components/car-single/SlideGallery";
import FilterBox from "@/components/car-single/filter-box";
import Faq from "@/components/faq/Faq";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Car Overview - Key Car Rental Iceland",
  description: "Find your perfect rental car in Iceland",
};

const CarSingleV1Dynamic = () => {
  let params = useParams();
  const id = params.id;
  const car = carsData.find((item) => item.id == id) || carsData[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-lg-8">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <h1 className="text-30 sm:text-24 fw-600">{car?.title}</h1>
                  <div className="row x-gap-10 items-center pt-10">
                    <div className="col-auto">
                      <div className="d-flex x-gap-5 items-center">
                        <i className="icon-location text-16 text-light-1" />
                        <div className="text-15 text-light-1">
                          {car?.location}
                        </div>
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-auto">
                      <button
                        data-x-click="mapFilter"
                        className="text-blue-1 text-15 underline"
                      >
                        Show on map
                      </button>
                    </div>
                  </div>
                </div>
                {/* End title and other info */}

                <div className="col-auto">
                  <div className="row x-gap-10 y-gap-10">
                    <div className="col-auto">
                      <button className="button px-15 py-10 -blue-1">
                        <i className="icon-share mr-10" />
                        Share
                      </button>
                    </div>
                    {/* End .col */}
                    
                  </div>
                </div>
                {/* End col button group */}
              </div>
              {/* End .row */}

              <div className="mt-40">
                <SlideGallery />
              </div>
            </div>
            {/* End col-lg-8 left car gallery */}

            <div className="col-lg-4">
              <div className="d-flex justify-end">
                <div className="px-30 py-30 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
                  <div className="row y-gap-15 items-center justify-between">
                    <div className="col-auto">
                      <div className="text-14 text-light-1">
                        From
                        <span className="text-20 fw-500 text-dark-1 ml-5">
                          US{car?.price}
                        </span>
                      </div>
                    </div>
                    {/* End .col-auto */}

                  </div>
                  {/* End .row */}

                  <div className="row y-gap-20 pt-20">
                    <FilterBox />
                  </div>
                  {/* End .row */}
                </div>
                {/* End px-30 */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col right car sidebar filter box */}
          </div>
          {/* End .row */}
        </div>
        {/* End .containar */}
      </section>
      {/* End Galler single */}

      <section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div>
                <h3 className="text-22 fw-500">Car Overview</h3>
                <PropertyHighlights />
                <Overview />
              </div>
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End pt-40 */}

      {/* End main content section */}
      <br />

      <DefaultFooter />
    </>
  );
};

export default CarSingleV1Dynamic;
