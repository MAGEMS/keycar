import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/block/BlockGuide";
import Block1 from "@/components/about/Block1";

import Testimonial from "@/components/testimonial/Testimonial";
import Counter2 from "@/components/counter/Counter2";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "About Key Car Rental Iceland",
  description: "We are a car rental company in Iceland. We offer a wide range of cars from small cars to SUV's.",
};

const About = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block1 />
          </div>
        </div>
      </section>
      {/* End about block section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Discover Why <span className="brand">Key Car Rental</span> is
                <br />
                Your <span className="brand">Ideal</span> Choice in Iceland</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Hear from Our <span className="brand">Satisfied Customers</span>
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  At Key Car Rental, we're proud of the experiences we've provided to our customers.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="overflow-hidden pt-80 js-section-slider">
            <div className="item_gap-x30">
              <Testimonial />
            </div>
          </div>
          {/* End .overflow-hidden */}

          <div className="row y-gap-30 items-center pt-40 sm:pt-20">
            <div className="col-xl-4">
              <Counter2 />
            </div>
            {/* End .col */}

          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End testimonial section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default About;
