const BlockGuide = () => {
  const blockContent = [
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
      {blockContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
