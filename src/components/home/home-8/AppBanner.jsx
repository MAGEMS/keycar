import AppBlock from "../../block/AppBlock";

const AppBanner = () => {
  return (
    <section
      className="section-bg pt-80 pb-80 md:pt-40 md:pb-40"
      data-aos="fade-up"
    >
      <div className="section-bg__item -w-1500 rounded-4 bg-blue-2"></div>
      <div className="container">
        <div className="row y-gap-30 items-center justify-between">
          <div className="col-xl-5 col-lg-6">
            <AppBlock />
          </div>
          {/* End .col */}

          <div className="col-lg-6">
            <div className="imageGrid">
              <img className="w-full rounded-4 rounded-8" src="/img/app/tours.jpg" alt="image" />
              <img className="w-full rounded-4 rounded-8" src="/img/app/tours-1.jpg" alt="image" />
              <img className="w-full rounded-4 rounded-8" src="/img/app/tours-2.jpg" alt="image" />
              <img className="w-full rounded-4 rounded-8" src="/img/app/tours-3.jpg" alt="image" />
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default AppBanner;
