const Faq = () => {
  const faqContent = [
    {
      id: 1,
      collapseTarget: "One",
      title: "What is the minimum rental period?",
      content: `The mininum rental period is 48 hours.`,
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: "How old do I have to be to rent a car?",
      content: `Minimum age is 20 years for 2WD cars or medium 4WD/AWD, and 23 years for larger 4WD, SUVs, or luxury models.`,
    },
    {
      id: 3,
      collapseTarget: "Three",
      title: "What documents are necessary to rent a car?",
      content: `A valid driving license and a credit card are required. Foreign licenses must have Latin characters.`,
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: "Do your cars have winter equipment like studded tires?",
      content: `Our cars are equipped with studded tires during the winter season.`,
    },
    {
      id: 5,
      collapseTarget: "Five",
      title: "Can I pick up the car outside of office hours?",
      content: `Yes, we offer self-service pick-up in Keflavík for clients who have completed online check-in and paid their rental upfront.`,
    },
  ];
  return (
    <>
      {faqContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.collapseTarget}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
              <div className="button text-dark-1 text-start">{item.title}</div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={item.collapseTarget}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{item.content}</p>
              </div>
            </div>
            {/* End accordion conent */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
