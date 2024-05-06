import MainFilterSearchBox from "./MainFilterSearchBox";

const SearchBoxContent = () => {
  return (
    <div className="offcanvas-body d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-12">
            <div className="text-center">
              <h1
                className="text-60 lg:text-40 md:text-30 text-dark-1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Get The Car That suits your <span className="brand">Needs</span>
              </h1>
              <p
                className="text-dark-1 mt-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Find better cars at unbeatable prices with Key Car Rental
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End  container */}

      <div className="masthead-bottom mt-40 md:mt-4">
        <MainFilterSearchBox />
        {/* End Search filter box */}
      </div>
    </div>
  );
};

export default SearchBoxContent;
