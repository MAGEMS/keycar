const Specifications = () => {
  const speciContent = [
    { id: 1, name: "Fuel Type", content: "Gasoline" },
    { id: 2, name: "Fuel Consumption", content: "4.3 l/100km | 66 mpg" },
    { id: 3, name: "Fuel Tank", content: "35 l | 9 gal" },
    { id: 4, name: "Fuel Range", content: "800 km | 497 mi" },
    { id: 5, name: "Emission", content: "114 g/km" },
    { id: 6, name: "Luggage Space", content: "252 l | 9 ft3" },
    { id: 7, name: "Doors", content: "5" },
  ];
  return (
    <div className="row y-gap-30 pt-15">
      {speciContent.map((item) => (
        <div className="col-sm-4" key={item.id}>
          <div className="fw-500">{item.name}</div>
          <div className="text-15">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Specifications;
