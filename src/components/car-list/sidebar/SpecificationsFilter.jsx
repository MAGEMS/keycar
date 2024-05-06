const SpecificationsFilter = () => {
  const luggageOptions = [1, 2, 3, 4, '5+'];

  return (
    <>
      {luggageOptions.map((option, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{option} Luggage</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">4</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SpecificationsFilter;