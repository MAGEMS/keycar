import CallToActions from "@/components/common/CallToActions";
import Header11 from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import StepperBooking from "@/components/booking-page/stepper-booking";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Extras - Key Car Rental Iceland",
  description: "Choose your extras",
};

const BookingPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking />
        </div>
        {/* End container */}
      </section>
      {/* End stepper */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default BookingPage;
