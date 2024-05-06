const Block1 = () => {
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-40 fw-600">About Key Car Rental</h2>
        <p className="mt-5">Driving Your Icelandic Adventure Forward</p>
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
        Welcome to Key Car Rental, where your journey in Iceland begins with a key turn. 
        Located in Keflavík Airport our mission extends beyond just renting cars; it's 
        about providing you with the perfect companion for your Icelandic adventure. 
        Our commitment is to keep you safe on the road and ensure complete satisfaction 
        with your chosen vehicle.
          <br />
          <br />
          Take the opportunity to acquaint yourself with its fascinating history
          chronicled by institutions like the British Museum as well as see how
          far it has come by simply riding the Tube and passing by celebrated
          landmarks like Buckingham Palace, Westminster Abbey, and marvels like
          Big Ben, the London Eye, and the Tower Bridge.
        </p>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <img
          src="/img/pages/about/about-key-car-rental.jpg"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
