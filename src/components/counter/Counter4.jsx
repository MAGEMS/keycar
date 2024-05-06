const Counter4 = () => {
  const blockContent = [
    {
      id: 1,
      number: "1,339 km",
      meta: "Ring Road Length",
      hasUnit: "",
      delayAnim: "100",
    },
    {
      id: 2,
      number: "944 m",
      meta: "Iceland's Highest Road",
      hasUnit: "",
      delayAnim: "200",
    },
    {
      id: 3,
      number: "-39,7°c",
      meta: "Coldest Temperature Recorded",
      hasUnit: "",
      delayAnim: "300",
    },
    {
      id: 4,
      number: "30,5°c",
      meta: "Warmest Temperature Recorded",
      hasUnit: "",
      delayAnim: "400",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnim}
        >
          <div className="py-60 sm:py-30 text-center">
            <div className="text-40 lg:text-30 lh-13 text-dark-1 fw-600">
              {item.number}
              {item.hasUnit}
            </div>
            <div className="text-14 lh-14 text-light-1 mt-10">{item.meta}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Counter4;
