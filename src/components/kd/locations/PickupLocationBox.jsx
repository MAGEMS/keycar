import { listOfPickupLocations } from "@/services/apis/vehicle.api";
import { choosePickupLocation } from "@/store/booking-reducer";
import React,{Fragment, useEffect, useState} from "react";
import { useDispatch } from "react-redux";

const PickupLocationBox = (props) => {
  const [showPickupLocationBox, setShowPickupLocationBox] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [locationSearchContent, setLocationSearchContent] = useState([]);

  const locations = props.locations;
  const selectedLocation = props.selectedLocation;
  if(locations && locations.length > 0)
    setLocationSearchContent(locations);
  if(selectedLocation)
    setSelectedItem(selectedLocation);

  const dispatch = useDispatch()


  const handleOptionClick = (item) => {
    setSelectedItem(item);
    setShowPickupLocationBox(false);
    dispatch(choosePickupLocation(item))
    if(props.onLocationSelected)
      props.onLocationSelected(item);
  };


  const loadLocations = async () => {
    
    try {
      
      const  { Locations } =  await listOfPickupLocations();
      if(!Locations) throw new Error('');

      if(Locations.length !== 0){
        setSelectedItem(Locations[0]);
        setLocationSearchContent(Locations)
      }


    } catch (error) {
      console.log(error);
    }

  }

  
  useEffect(() => {
    if(!locations)
      loadLocations();

  },[])

  return (
    <Fragment>
      <div onClick={ () => setShowPickupLocationBox(!showPickupLocationBox) }>
        <h4 className="text-15 fw-500 ls-2 lh-16">Pickup Location</h4>
        <div className="text-15 text-light-1 ls-2 lh-16">{selectedItem && selectedItem.Name}</div>
      </div>

      <div>
        <div className={`shadow-2 dropdown-menu min-width-400 mt-40 ${showPickupLocationBox ? 'show' : ''}`}>
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {locationSearchContent.map((item,index) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.Id === item.Id ? "active" : ""
                  }`}
                  key={index}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex align-items-center">
                    <div className="icon-location-2 text-light-1 text-20 pt-2" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.Name}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PickupLocationBox;

// export default SearchBar;
