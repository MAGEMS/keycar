import carsData from "../../../data/cars";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { Link } from "react-router-dom";
import { getAssetsUrl } from "@/config/api-urls";

const CarPropertes = (props) => {

  const { vehicles = [] } = props


  return (
    <>
      {vehicles.slice(0, 5).map((item) => (
        <div className="col-12" key={item?.Id}>
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="relative d-flex">
                  <div className="cardImage w-250 md:w-1/1 rounded-4 border-light">
                    <div className="custom_inside-slider">

                    <img
                        className="rounded-4 col-12 js-lazy"
                        src={getAssetsUrl(item?.Image)}
                        alt="image"
                      />
                      
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {item?.Images?.map((slide, i) => (
                          <SwiperSlide key={i}>
                            <div className="ratio ratio-1:1">
                              <div className="cardImage__content">
                                <img
                                  className="rounded-4 col-12 js-lazy"
                                  src={slide}
                                  alt="image"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    {/* End image */}
                  </div>
                  {/* End image ratio */}
                </div>
                {/* End relative */}
              </div>
              {/* End .col */}

              <div className="col-md">
                <div className="d-flex flex-column h-full justify-between">
                  <div>
                    <div className="row x-gap-5 items-center">
                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          {item?.location}
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="size-3 rounded-full bg-light-1" />
                      </div>
                      <div className="col-auto">
                        <div className="text-14 text-light-1">SUV</div>
                      </div>
                    </div>
                    <h3 className="text-18 lh-16 fw-500 mt-5">
                      {item?.Name}{" "}
                      <span className="text-15 text-light-1">or similar</span>
                    </h3>
                  </div>
                  <div className="col-lg-7 mt-20">
                    <div className="row y-gap-5">
                      <div className="col-sm-6">
                        <div className="d-flex items-center">
                          <i className="icon-user-2" />
                          <div className="text-14 ml-10">{item?.Seats}</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex items-center">
                          <i className="icon-luggage" />
                          <div className="text-14 ml-10">{item?.LargeBags + item?.SmallBags}</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex items-center">
                          <i className="icon-transmission" />
                          <div className="text-14 ml-10">
                            {item?.TransmissionName}
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex items-center">
                          <i className="icon-speedometer" />
                          <div className="text-14 ml-10">{item?.Model}</div>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                  <div className="mt-20">
                    <div className="d-flex items-center">
                      <i className="icon-check text-10" />
                      <div className="text-14 fw-500 ml-10">
                        Free Amendments
                      </div>
                    </div>
                    <div className="d-flex items-center mt-5">
                      <i className="icon-check text-10" />
                      <div className="text-14 fw-500 text-green-2 ml-10">
                        Free Cancellation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End col-md */}

              <div className="col-md-auto text-right md:text-left">

                <div className="text-22 lh-12 fw-600 mt-70 md:mt-20">
                  {item?.Currency} {item?.TotalPrice.toFixed(2)}
                </div>
                <div className="text-14 text-light-1 mt-5">Total</div>
                
                <div className="d-flex">
                  <Link
                    to={`/car-booking/${item.Id}`}
                    className="button h-50 px-24 bg-dark-1 -blue-1 text-white mt-24 me-3"
                  >
                    Book Now
                  </Link>
                    
                  <Link
                    to={`/car-single/${item.Id}`}
                    className="button h-50 px-24 bg-light-1 -blue-1 text-white mt-24"
                  >
                    View Detail <div className="icon-arrow-top-right ml-15" />
                  </Link>
                  
                </div>

              </div>
              {/* End col-md-auto */}
            </div>
            {/* End .row */}
          </div>
        </div>
      ))}
    </>
  );
};

export default CarPropertes;
