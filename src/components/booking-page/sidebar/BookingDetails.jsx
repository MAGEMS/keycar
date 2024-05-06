import { getAssetsUrl } from "@/config/api-urls";
import moment from "moment/moment";
import { useSelector } from "react-redux";

const BookingDetails = () => {

  const { selectedVehicle = false, dateFrom, dateTo  } = useSelector((state) => state.bookingReducer) || {};

  console.log('dateFrom',dateFrom)

  if(!selectedVehicle) return null

  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="text-20 fw-500 mb-30">Your booking details</div>
      <div className="row x-gap-15 y-gap-20">
        <div className="col-auto">
          <img
            src={getAssetsUrl(selectedVehicle?.Image)}
            alt="image"
            className="size-140 rounded-4 object-cover"
          />
        </div>
        {/* End .col */}
        <div className="col">
          <div className="d-flex x-gap-5 pb-10">
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
          </div>
          {/* End ratings */}
          <div className="lh-17 fw-500">
            {selectedVehicle?.Name}
          </div>
          <div className="text-14 lh-15 mt-5">{selectedVehicle?.DriveName}</div>
          <div className="row x-gap-10 y-gap-10 items-center pt-10">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="size-30 flex-center bg-blue-1 rounded-4">
                  <div className="text-12 fw-600 text-white">4.8</div>
                </div>
                <div className="text-14 fw-500 ml-10">Exceptional</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-14">3,014 reviews</div>
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}

      <div className="border-top-light mt-30 mb-20" />
      <div className="row y-gap-20 justify-between">
        <div className="col-auto">
          <div className="text-15">Pickup</div>
          <div className="fw-500">{ moment(dateFrom).format('ddd DD MMM YYYY') }</div>
          <div className="text-15 text-light-1">{moment(dateFrom).format('HH:mm')}</div>
        </div>
        <div className="col-auto md:d-none">
          <div className="h-full w-1 bg-border" />
        </div>
        <div className="col-auto text-right md:text-left">
          <div className="text-15">Drop</div>
          <div className="fw-500">{ moment(dateTo).format('ddd DD MMM YYYY') }</div>
          <div className="text-15 text-light-1">{moment(dateTo).format('HH:mm')}</div>
        </div>
      </div>
      {/* End row */}

      {/* <div className="border-top-light mt-30 mb-20" />
      <div>
        <div className="text-15">Total length of stay:</div>
        <div className="fw-500">9 nights</div>
        <a href="#" className="text-15 text-blue-1 underline">
          Travelling on different dates?
        </a>
      </div> */}

        {/* <div className="border-top-light mt-30 mb-20" />
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-auto">
            <div className="text-15">You selected:</div>
            <div className="fw-500">Superior Double Studio</div>
            <a href="#" className="text-15 text-blue-1 underline">
              Change your selection
            </a>
          </div>
          <div className="col-auto">
            <div className="text-15">1 room, 4 adult</div>
          </div>
        </div> */}
      {/* End row */}
    </div>
    // End px-30
  );
};

export default BookingDetails;
