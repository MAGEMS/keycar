import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import NotFound from "@/components/common/NotFound";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "404 - Key Car Rental Iceland",
  description: "Page Not Found - Key Car Rental Iceland",
};

const BecomeExpart = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BecomeExpart;
