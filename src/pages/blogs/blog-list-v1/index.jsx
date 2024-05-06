import React from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import LocationTopBar from "@/components/common/LocationTopBar";
import DefaultFooter from "@/components/footer/default";
import Blog1 from "@/components/blog/Blog1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Our Guides - Key Car Rental Iceland",
  description: "Find information about Iceland and traveling in Iceland",
};

const BlogListV1 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Key Car Rental's <span className="brand">Guides & Tips</span></h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Dive into our blog, a treasure trove of guides, driving tips, and hidden gems of Iceland.
                </p>
              </div>
            </div>
          </div>
          <Blog1 />
        </div>
      </section>
      
      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogListV1;
