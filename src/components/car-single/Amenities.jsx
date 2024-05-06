const Amenities = () => {
  const amenitiesContent = [
    { id: 1, name: "Manual" },
    { id: 2, name: "FWD" },
    { id: 3, name: "1 Bags" },
    { id: 4, name: "5 Passengers" },
    { id: 5, name: "A/C" },
    { id: 6, name: "USB Charger" },
    { id: 7, name: "Heated Seats" },
    { id: 8, name: "Bluetooth" },
  ];
  return (
    <>
      <div className="row y-gap-10 pt-15">
        {amenitiesContent.map((item) => (
          <div className="col-sm-5" key={item.id}>
            <div className="d-flex items-center">
              <i className="icon-check text-10 mr-15" />
              <div className="text-15">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Amenities;
