import Request from "../Request";

export const listOfPickupLocations =  () => {

   
    return new Promise(async (resolve, reject) => {
        

        try {

            const response  = await Request('/api/getpickuplist');
            console.log('response',response);
            resolve(response);
            
          } catch (error) {

            reject(error);
            console.log('E',error)
            
          }

    })


}


export const loadVehicles =  ( data = {} ) => {

   
    return new Promise(async (resolve, reject) => {
        

        try {
          
            const response  = await Request('/api/class/getlist',data);
            console.log('response',response);
            resolve(response);
            
          } catch (error) {

            reject(error);
            console.log('E',error)
            
          }

    })


}


export const loadInsurances =  ( data = {} ) => {

   
  return new Promise(async (resolve, reject) => {
      

      try {


          data.RentalId = Rental_ID;

          const response  = await Request('/vehicleapi/insurance/getlist',data);
          console.log('response',response);
          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error)
          
        }

  })


}

export const loadExtras =  ( data = {} ) => {

   
  return new Promise(async (resolve, reject) => {
      

      try {


          data.RentalId = Rental_ID;
          const response  = await Request('/vehicleapi/extra/getlist',data);
          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error)
          
        }

  })


}



export const addReservations =  ( data = {} ) => {

   
  return new Promise(async (resolve, reject) => {
      

      try {


          data.RentalId = Rental_ID;
          const response  = await Request('/vehicleapi/reservation/add',data);
          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error)
          
        }

  })


}


export const addPayment =  ( data = {} ) => {

   
  return new Promise(async (resolve, reject) => {
      

      try {


          data.RentalId = Rental_ID;
          const response  = await Request('/vehicleapi/payment/add',data);
          if(!response) throw new Error('Oops! Something went wrong')

          if(!response.Success) throw new Error(response.Message)

          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error)
          
        }

  })


}

export const loadVehicleDetails =  (data = {}) => {

   
  return new Promise(async (resolve, reject) => {
      

      try {

          data.RentalId = Rental_ID;
          const response  = await Request('/vehicleapi/class/getitem',data);
          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error)
          
        }

  })


}
