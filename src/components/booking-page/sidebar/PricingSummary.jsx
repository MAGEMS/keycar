import { useSelector } from "react-redux";

const PricingSummary = ({totalPaymentAmount = 0,Insurence = false, Extras = false }) => {

  const { selectedVehicle = {}  } = useSelector((state) => state.bookingReducer) || {};

  return (
    <div className="px-30 py-30 border-light rounded-4 mt-30">
      <div className="text-20 fw-500 mb-20">Your price summary</div>
      <div className="row y-gap-5 justify-between">
        <div className="col-auto">
          <div className="text-15">Rental Price</div>
        </div>
        {/* End col */}
        <div className="col-auto">
          <div className="text-15">{selectedVehicle?.TotalPrice.toFixed(2)} ISK</div>
        </div>
        {/* End col */}
      </div>
      {/* End .row */}

     {Insurence != false && <div className="row y-gap-5 justify-between pt-5">
        <div className="col-auto">
          <div className="text-15">Insurence Fees</div>
        </div>
        <div className="col-auto">
          <div className="text-15">{Insurence.toFixed(2)} ISK</div>
        </div>
      </div>
    }

    {Extras != false && <div className="row y-gap-5 justify-between pt-5">
      <div className="col-auto">
        <div className="text-15">Extras</div>
      </div>
      <div className="col-auto">
        <div className="text-15">{Extras.toFixed(2)} ISK</div>
      </div>
    </div>
  }
      {/* End .row */}

      <div className="row y-gap-5 justify-between pt-5">
        <div className="col-auto">
          <div className="text-15">Booking fees</div>
        </div>
        <div className="col-auto">
          <div className="text-15">FREE</div>
        </div>
      </div>
      {/* End .row */}

      <div className="px-20 py-20 bg-blue-2 rounded-4 mt-20">
        <div className="row y-gap-5 justify-between">
          <div className="col-auto">
            <div className="text-18 lh-13 fw-500">Price</div>
          </div>
          <div className="col-auto">
            <div className="text-18 lh-13 fw-500">{totalPaymentAmount.toFixed(2)} ISK</div>
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
    // End px-30
  );
};

export default PricingSummary;
