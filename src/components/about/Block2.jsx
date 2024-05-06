import { useState } from "react";
import ModalVideo from "react-modal-video";

const Block2 = () => {
  const [isOpen, setOpen] = useState(false);

  const expertContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/tag-group.svg",
      title: "Competitive Pricing",
      text: `Experience value and affordability. Our competitive rates, 
      coupled with a strict no hidden fees policy, guarantee a transparent 
      and budget-friendly rental experience. Enjoy more for less with us.`,
      delayAnimation: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/customer-service.svg",
      title: "Personalized Service",
      text: `Your satisfaction is our priority. Need a specific vehicle or 
      have special requirements? Our team is dedicated to 
      fulfilling your unique needs.`,
      delayAnimation: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/car.svg",
      title: "Diverse Fleet",
      text: `Choose from our extensive range of vehicles, from fuel-efficient, 
      economical compacts to rugged, all-terrain 4x4s, each perfectly suited 
      for navigating Iceland’s diverse and ever-changing landscapes.`,
      delayAnimation: "300",
    },
  ];

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="rDYdeq3JW_E"
        onClose={() => setOpen(false)}
      />

      <div className="section-bg__item -right -image col-5 md:mb-60 sm:mb-40 d-flex z-2">
        <img src="/img/backgrounds/10.png" alt="image" />
        <div className="absolute col-12 h-full flex-center z-1">
          <div
            onClick={() => setOpen(true)}
            className="d-flex items-center js-gallery"
            role="button"
          >
            <span className="button -outline-white text-white size-50 rounded-full flex-center">
              <i className="icon-play text-16" />
            </span>
            <span className="fw-500 text-white ml-15">Watch Video</span>
          </div>
        </div>
      </div>
      {/* End right video popup icon with image */}

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-7">
            <h2 className="text-30 fw-600">Why be a Local Expert</h2>
            <p className="mt-5">
              These popular destinations have a lot to offer
            </p>
            <div className="row y-gap-30 pt-60 md:pt-40">
              {expertContent.map((item) => (
                <div className="col-12" key={item.id}>
                  <div className="d-flex pr-30">
                    <img className="size-50" src={item.icon} alt="image" />
                    <div className="ml-15">
                      <h4 className="text-18 fw-500">{item.title}</h4>
                      <p className="text-15 mt-10">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End left local expert content */}
    </>
  );
};

export default Block2;
