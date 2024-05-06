import React from "react";
import { useEffect, useState } from "react";
import CarProperties from '@/components/car-list/car-list-v2/CarPropertes';

const OurFleet = () => {
  const [filterOption, setFilterOption] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(
      CarList.filter((car) => filterOption === 'All' || car.category === filterOption),
    );
  }, [filterOption]);

  const filterOptions = [
    { label: "All", value: "All" },
    { label: "Small Economy", value: "Small Economy" },
    { label: "Midsize Family", value: "Midsize Family" },
    { label: "4x4 SUV", value: "4x4 SUV" },
    { label: "SUV Campervan", value: "SUV Campervan" },
  ];

  return (
    <div className="tabs -pills-3 pt-30 js-tabs">
      <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls">
        {filterOptions.map((option) => (
          <div className="col-auto" key={option.value}>
            <button
              className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button ${
                filterOption === option.value ? "is-tab-el-active" : ""
              }`}
              onClick={() => setFilterOption(option.value)}
            >
              {option.label}
            </button>
          </div>
        ))}
      </div>

      <div>
        {filteredItems.map((car) => (
          <CarProperties key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default OurFleet;