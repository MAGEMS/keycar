import React, { useEffect, useState } from "react";
import "./ExtrasComponent.scss";
import InsuranceComponent from "../insurance/InsuranceComponent";
import BookingDetails from "../booking-page/sidebar/BookingDetails";
import { loadExtras } from "@/services/apis/vehicle.api";

const ExtrasItem = (props) => {

    const {extra,isSelected = false} = props;

  return (
    <div className={`pointer border-light rounded-4 p-2 w-100 d-flex ${isSelected ? 'active-2' : ''}`}>
      <img
        className="extra-image"
        src="/img/placeholder/image-.png"
        alt=""
        srcset=""
      />
      <div className="ms-4">
        <h5 className="font-14"> {extra.Name} </h5>
        <div>
          <span> ${extra.Price}</span>
          {extra.PricePerDay && <span>/Days </span>}
        </div>
      </div>
    </div>
  );
};

const ExtrasComponent = (props) => {

  const {handleInsurence,handleExtras} = props;

    const [ AllExtras, setAllExtras ] = useState([]);

    const [ activeExtras, setActiveExtras ] = useState([])

    const handleActiveExtras = (extra) => {


      const copyOfActiveExtras = [...activeExtras];
      const index = copyOfActiveExtras.indexOf(extra);

      if(index !== -1) {
        copyOfActiveExtras.splice(index,1);
      } else {
        copyOfActiveExtras.push(extra);
      }

      setActiveExtras(copyOfActiveExtras);
      handleExtras(copyOfActiveExtras)


    }




    useEffect(() =>{

       ( async () => {
          const data = {
            ClassId: null, // TODO: Set
            SortColumn: "Name", // TODO: Set
            SortDirection: "Asc", // TODO: Set
          }
          try {
              const  { Extras } =  await loadExtras(data);
              setAllExtras(Extras)
          } catch (error) {
              console.log("Error",error)
          }

        })();

    },[])


  return (
    <React.Fragment>
      <div className="col-xl-7 col-lg-8 mt-30 extras">
        <InsuranceComponent handleInsurence={handleInsurence} />
        <div>
          <h2 className="text-22 fw-500 mt-40 md:mt-24 mb-5">Extras</h2>
          <div className="px-30 py-30 border-light rounded-4 d-flex">
            <div className="row w-100">
                {
                    AllExtras.map(extra => {
                      return(
                        <div onClick={ () => handleActiveExtras(extra)} className="col-md-6 mb-3">
                          <ExtrasItem isSelected={activeExtras.includes(extra)} extra={extra} />
                        </div>
                      )
                    })
                }
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          <BookingDetails />
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default ExtrasComponent;
