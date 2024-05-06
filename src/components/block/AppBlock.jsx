const AppBlock = () => {
  return (
    <>
      <h2 className="text-30 lh-15">The Tours We Recommend</h2>
      <p className="text-dark-1 pr-40 lg:pr-0 mt-15 sm:mt-5">
      Enhance your Icelandic adventure with our specially curated selection 
      of tours from trusted suppliers. At Key Car Rental, we believe in 
      offering more than just a car rental service; we're your gateway to 
      the full Icelandic experience. From breathtaking glacier hikes to 
      serene hot spring retreats, our recommended tours are handpicked 
      to complement your journey.
      </p>

      <div className="d-inline-block mt-40 lg:mt-20">
        <a href='/destinations' className="button -md -blue-1 bg-dark-1 text-white">
          Read more <div className="icon-arrow-top-right ml-15"></div>
        </a>
      </div>
      {/* End .col */}

    </>
  );
};

export default AppBlock;
