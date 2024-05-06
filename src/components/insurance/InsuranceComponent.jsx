import { loadInsurances } from "@/services/apis/vehicle.api";
import React, { useEffect, useState } from "react";

const InsuranceComponent = ({handleInsurence}) => {



    const [ AllInsurances, setAllInsurances ] = useState([])
    const [ activeInsurence, setActiveInsurence ] = useState(false)

    const handleActiveInsurence = (insurance) => {
      console.log('insurance',insurance)
      setActiveInsurence(insurance);
      handleInsurence(insurance)
    }


    useEffect(() =>{

       ( async () => {
        
        
          const data = {
            ClassId: null, // TODO: Set
            SortColumn: "Name", // TODO: Set
            SortDirection: "Asc", // TODO: Set
          }
          try {
              const  { Insurances } =  await loadInsurances(data);
              setAllInsurances(Insurances)
          } catch (error) {
              console.log("Error",error)
          }

        })();

    },[])



  return (
    <div>
      <h2 className="text-22 fw-500 mt-40 md:mt-24 mb-5">Choose Insurance</h2>
      <div className="row">


        {
            AllInsurances.map( (insurance,index)  => {
                return(
                    <div onClick={()=> handleActiveInsurence(insurance)} key={index} className="col-xl-4 col-lg-4 text-center mb-2">
                    <div className={`card mb-4 box-shadow pointer ${activeInsurence && activeInsurence.Id == insurance.Id ? 'active' : ''}`}  >
                      <div className="card-header">
                        <span className="my-0 font-weight-normal insurance-name">{insurance.Name}</span>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">
                          {insurance.Price} ISK {insurance.PricePerDay && <small className="text-muted font-12">/Day</small>}
                        </h1>
                        <div className="insurance-description" dangerouslySetInnerHTML={ { __html : insurance.Description} }>

                        </div>
                      </div>
                    </div>
                  </div>
          
                )
            })
        }

      
      </div>
    </div>
  );
};

export default InsuranceComponent;
