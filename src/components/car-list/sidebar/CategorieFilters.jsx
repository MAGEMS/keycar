const CategorieFilters = () => {
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">Small Economy</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">4</div>
        </div>
      </div>
      {/* End .row */}
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">Midsize Family</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">2</div>
        </div>
      </div>
      {/* End .row */}
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">4x4 SUV</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">5</div>
        </div>
      </div>
      {/* End .row */}
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">SUV Campervan</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">2</div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default CategorieFilters;
