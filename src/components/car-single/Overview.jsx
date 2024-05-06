import Amenities from "./Amenities";
import Specifications from "./Specifications";

const Overview = () => {
  return (
    <>
      <div className="border-top-light mt-40 pt-40 mb-40">
        <h3 className="text-22 fw-500">Overview</h3>
        <p className="text-dark-1 text-15 mt-20">
            The Dacia Duster is a versatile and reliable car that is perfect for all your travel needs. Whether you're exploring the city or going on an adventure off-road, the Dacia Duster has got you covered. With its spacious interior, comfortable seating, and advanced features, it offers a comfortable and enjoyable driving experience. Experience the freedom and versatility of the Dacia Duster today!
        </p>
        <a
          href="#"
          className="d-block text-14 text-blue-1 fw-500 underline mt-10"
        >
          Show More
        </a>
        <div className="mt-60 lg:mt-40 md:mt-30">
              <h5 className="text-16 fw-500">Highlights of the Dacia Duster</h5>
              <ul className="list-disc text-15 mt-10">
                <li>
                  Spacious interior for comfortable travel
                </li>
                <li>Advanced features for an enhanced driving experience</li>
                <li>Perfect for both city exploration and off-road adventures</li>
              </ul>
            </div>
          </div>
      {/* End overview */}

      <div className="border-top-light mt-40 pt-40 mb-40">
        <h3 className="text-22 fw-500">Technical Data</h3>
        <div className="col-xl-9">
          <Specifications />
        </div>
      </div>
      {/* End specifications */}

      <div className="border-top-light mt-40 pt-40 mb-40">
        <h3 className="text-22 fw-500">Features</h3>
        <Amenities />
      </div>
    </>
  );
};

export default Overview;
