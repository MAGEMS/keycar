import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import Hero8 from "@/components/hero/hero-8";
import BlockGuide from "@/components/home/home-8/BlockGuide";
import Testimonial from "@/components/testimonial/Testimonial";
import CounterDark from "@/components/counter/CounterDark";
import PopularCars from "@/components/home/home-8/PopularCars";
import Counter4 from "@/components/counter/Counter4";
import Faq from "@/components/faq/Faq";
import AppBanner from "@/components/home/home-8/AppBanner";
import Blog from "@/components/home/home-8/Blog";
import { Link } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import { useEffect, useState } from "react";
import Request from "@/services/Request";

const metadata = {
  title: "Key Car Rental Iceland",
  description: "Explore the beauty of Iceland with Keycarrental Iceland",
};




const Home_8 = () => {


  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <DefaultHeader />
      {/* End Default Header */}

      <Hero8 />
      {/* End Hero 8 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -lg">
                <h2 className="sectionTitle__title">Discover Why <span className="brand">Key Car Rental</span> is 
                <br />
                Your <span className="brand">Ideal</span> Choice in Iceland</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Coose Us */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -lg">
                <h2 className="sectionTitle__title">Our Fleet - Your <span className="brand">Perfect</span> Ride Awaits</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Find the vehicle that suits your style and needs.
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <PopularCars />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Popular Car Hire Sections */}

      <section className="layout-pt-lg layout-pb-lg bg-dark-1">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle text-white">
                <h2 className="sectionTitle__title">Hear from Our <span className="brand">Satisfied Customers</span></h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  At Key Car Rental, we're proud of the experiences we've provided to our customers.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="overflow-hidden pt-60 lg:pt-40 sm:pt-30">
            <div className="item_gap-x30">
              <Testimonial />
            </div>
          </div>
          {/* End .overflow-hidden */}

          <div className="row y-gap-30 items-center pt-40 sm:pt-20">
            <div className="col-xl-4">
              <CounterDark />
            </div>
            {/* End .col */}

          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End testimonial section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-xl-5 col-lg-6">
              <h2 className="text-30 fw-600">
              Embark on a <span className="brand">Safe & Memorable</span> Journey in Iceland
              </h2>
              <p className="mt-40 lg:mt-20">
              In Iceland, always drive on the right and overtake on the left, adhering to speed limits 
              (30-50 km/h in populated areas, 80 km/h on gravel, 90 km/h on paved roads). Seatbelts are 
              mandatory. The Ring Road, spanning 1,339 km, offers scenic drives but requires caution on 
              gravel parts, especially in winter; check weather and road conditions. 
              For countryside driving, avoid distractions, be cautious on narrow roads and single-lane 
              bridges, and use 4x4s for highlands in summer. Off-road driving is illegal. 
              For safety, use the ICE-SAR app in remote areas.
              </p>

              <div className="d-inline-block mt-40 lg:mt-20">
                <a href="https://safetravel.is/" className="button -md -blue-1 bg-dark-1 text-white">
                  Read more <div className="icon-arrow-top-right ml-15"></div>
                </a>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-6">
              <div className="shadow-4">
                <div className="row border-center">
                  <Counter4 />
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Key Car Rental's <span className="brand">Guides</span>
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                 Get inspiration for your next trip
                </p>
              </div>
            </div>
            {/* End .col */}
            <div className="col-auto">
              <Link
                to="/blog-list-v2"
                className="button -md -blue-1 bg-blue-1-05 text-dark-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Sections */}

      <AppBanner />
      {/* End AppBanner section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Frequently Asked Questions
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Have Questions? We Have Answers.
                  
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-8 col-lg-10">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End faq section block */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default Home_8;
