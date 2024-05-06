import React, { useEffect, useState } from "react";
import Extras from "../Extras";
import CustomerInfo from "../CustomerInfo";
import PaymentInfo from "../PaymentInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import ExtrasComponent from "@/components/extras/ExtrasComponent";
import { addPayment, addReservations, loadVehicleDetails } from "@/services/apis/vehicle.api";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { chooseSelectedVehicle } from "@/store/booking-reducer";
import moment from "moment";

const getFormateArray = (array, hasQnt = false) => {
 
  const list = [];

  array.map(k =>{
    hasQnt ? list.push([k.Id, "1"]) : list.push([k.Id]); 
  })

  return list;

}


const Index = () => {

  const { selectedPickupLocation = false, dateFrom, dateTo  } = useSelector((state) => state.bookingReducer) || {};
  
  const dispatch = useDispatch()

  const { car } = useParams()  

  const [currentStep, setCurrentStep] = useState(1);
  const [activeInsurence, setActiveInsurence] = useState(false);
  const [activeInsurenceTotalPrice, setActiveInsurenceTotalPrice] = useState(0);
  const [activeExtrasTotalPrice, setActiveExtrasTotalPrice] = useState(0);
  const [activeExtras, setActiveExtras] = useState(false);
  
  const [totalPaymentAmount, setTotalPaymentAmount] = useState(0);

  const [customerDetails, setCustomerDetails] = useState(false);



  const steps = [
    {
      title: "Choose a Car",
      stepNo: "1",
      disabled: true,
      checkMark: true,
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
    },
    {
      title: "Choose Extras",
      stepNo: "2",
      disabled: currentStep < 2,
      checkMark: currentStep >= 2,
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: <ExtrasComponent 
        handleInsurence={setActiveInsurence} 
        handleExtras={setActiveExtras} />,
    },
    {
      title: "Personal Details",
      stepNo: "3",
      disabled: currentStep < 3,
      checkMark: currentStep >= 3,
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: <CustomerInfo />,
    },
    {
      title: "Payment Details",
      stepNo: "4",
      disabled: currentStep < 4,
      checkMark: currentStep >= 4,
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content:<PaymentInfo 
        totalPaymentAmount={totalPaymentAmount} 
        activeInsurenceTotalPrice={activeInsurenceTotalPrice}  
        activeExtrasTotalPrice={activeExtrasTotalPrice}  
      />,
    },
    {
      title: "Final Step",
      stepNo: "5",
      disabled: currentStep < 5,
      checkMark: currentStep >= 5,
      stepBar: "",
      content: <OrderSubmittedInfo 
        totalPaymentAmount={totalPaymentAmount}
        customer={customerDetails}  />,
    },
  ];

  const renderStep = () => {

    const { content } = steps[currentStep];
    return <>{content}</>;
  };

  const nextStep = () => {


    if(currentStep)


    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };


  const addReservation = async () => {

        // Get the current date
        let currentDate = new Date();
            // Add 5 days to the original date
        currentDate.setDate(currentDate.getDate() + 45);
        // Format the updated date as an ISO 8601 string
        const updatedDateString = currentDate.toISOString();


    try {

      const data = {
        DateFrom : currentDate,
        DateTo :updatedDateString,
        ClassId : car,
        PickupLocationId : selectedPickupLocation?.Id,
        DropoffLocationId : selectedPickupLocation?.Id,
        Extras : getFormateArray(activeExtras,true),
        Insurances : getFormateArray([ activeInsurence ]),
        // Drivers: [
        //   [ 3, 'John Doe', 'LIC.285R038U', '1992-05-10', true ],
        // ],
        Customer: customerDetails,
        confirmReservation : true
      }

        const r  =  await addReservations(data);
        if(!r) throw new Error('Unable to add Reservations')
        if(r.Success == false) throw new Error(r.Message)
        return r
      
    } catch (error) {

      alert(error.message)
      return false;
      
    }
  }

  const handlePayment = async  (e) => {
    e.preventDefault();
    try {


    const reservation = await addReservation();
    if(!reservation) throw new Error('Unable to add reservation')

    if(reservation.Success == false) throw new Error(reservation.Message)

    const formDataObj = {};
    const myFormData = new FormData(e.target)
    myFormData.forEach((value, key) => (formDataObj[key] = value));


    const expDate = formDataObj.expDate.split('/')
    formDataObj.ExpirationMonth = expDate[0]
    formDataObj.ExpirationYear = expDate[1]
    formDataObj.Guid = reservation.Guid
    formDataObj.Currency = 'ISK'


      try {
        const paymentData = await addPayment(formDataObj)
        console.log('paymentData',paymentData)

      } catch (error) {
        
      } finally {
        nextStep()

      }
      

    } catch (error) {
      console.log('Error',error)
      
    }


  }

  const handleCustomerDetails = async  (e) => {
    e.preventDefault();

    const formDataObj = {};
    const myFormData = new FormData(e.target)
    myFormData.forEach((value, key) => (formDataObj[key] = value));

    console.log('Customer',formDataObj)

    setCustomerDetails(formDataObj);
    nextStep()


  }

  const loadActiveVehicleDetails =  async () => {

    try {

      console.log('car',car);

      const details = await loadVehicleDetails({Id : car})
      console.log('details',details)

      dispatch(chooseSelectedVehicle(details))
      
    } catch (error) {
      
    }

  }

  useEffect(() => {

    var totalPayment = 0;
    var extraPayment = 0;
    var insurencePayment = 0;

    if(activeInsurence){
      totalPayment = activeInsurence.Price;
      insurencePayment = activeInsurence.Price
    }

    if(activeExtras){

      activeExtras.map( extra => {
        totalPayment = totalPayment +  extra.Price;
        extraPayment = extraPayment +  extra.Price;

      } )

    }

    setTotalPaymentAmount(totalPayment);
    setActiveExtrasTotalPrice(extraPayment);
    setActiveInsurenceTotalPrice(insurencePayment);



  },[activeExtras,activeInsurence])

  useEffect(() => {
    loadActiveVehicleDetails();
  },[car])


  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="col-auto">
              <div
                className={`d-flex items-center cursor-pointer transition ${step.disabled ? 'disabled' : ''}`}
                onClick={() => !step.disabled && setCurrentStep(index)}
              >
                <div
                  className={
                    step.checkMark
                      ? "active size-40 rounded-full flex-center bg-blue-1"
                      : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                  }
                >
                  {step.checkMark ? (
                    <>
                      <i className="icon-check text-16 text-white"></i>
                    </>
                  ) : (
                    <>
                      <span>{step.stepNo}</span>
                    </>
                  )}
                </div>

                <div className="text-18 fw-500 ml-10"> {step.title}</div>
              </div>
            </div>
            {/* End .col */}

            {step.stepBar}
          </React.Fragment>
        ))}
      </div>
      {/* End stepper header part */}

      <div> 
        
        <form onSubmit={ currentStep == 3 ? handlePayment : handleCustomerDetails }> 

          <div className="row">{renderStep()}</div>
          {/* End main content */}

          <div className="row x-gap-20 y-gap-20 pt-20">
            <div className="col-auto">
              <button
                className="button h-60 px-24 -blue-1 bg-light-2"
                disabled={currentStep === 0}
                onClick={previousStep}
              >
                Previous
              </button>
            </div>
            {/* End prvious btn */}

            <div className="col-auto">
                  
                {
                  (currentStep == 2 || currentStep == 3) ? <button
                  className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
                  type="submit"
                  disabled={currentStep === steps.length - 1}
                >
                  Next <div className="icon-arrow-top-right ml-15" />
                </button> : <button
                  className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
                  disabled={currentStep === steps.length - 1}
                  onClick={nextStep}
                  type="button"
                >
                  Next <div className="icon-arrow-top-right ml-15" />
                </button>
                }

            </div>
            {/* End next btn */}
          </div>

        </form>

      </div>
      
      {/* End stepper button */}
    </>
  );
};

export default Index;
