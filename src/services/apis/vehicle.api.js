import Request from "../Request";

/* Response:
  {
    "Locations": [
      {
        "Id": 370,
        "Name": "Keflavik International Airport (KEF)",
        "Description": "Keflav&iacute;k International Airport, also known as Reykjav&iacute;k&ndash;Keflav&iacute;k Airport, is the largest airport in Iceland and the country&#39;s main hub for international transportation.",
        "ExtraInfo": false,
        "ExtraInfoText": "",
        "Times": []
      },
      {
        "Id": 371,
        "Name": "Reykjavík Domestic Airport (RVK)",
        "Description": "Reykjav&iacute;k International Airport is the centre for domestic flights in Iceland. The airport is located in Vatnsm&yacute;ri which is near the centre of Reykjav&iacute;k.",
        "ExtraInfo": false,
        "ExtraInfoText": "",
        "Times": []
      }
    ]
  }
*/
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
/* Response:
  {
    "Groups": [
      {
        "Id": 124,
        "Name": "Large",
        "Description": null
      },
      {
        "Id": 123,
        "Name": "Small",
        "Description": null
      }
    ]
  }
*/
export const loadGroupList =  () => {

   
  return new Promise(async (resolve, reject) => {
      

      try {

          const response  = await Request('/api/group/list');
          console.log('response',response);
          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error)
          
        }

  })


}

/*
{
  "Classes": [
    {
      "Id": 1269,
      "Name": "Dacia Duster 4x4 ",
      "Summary": "<p>In 2014 we added the new exciting and fuel efficient Dacia Duster to our fleet. Since then, it has become our most popular choice and our greatest addition. With it&acute;s economical 1.5 diesel engine avarage fuel consumption is 5,3 liters per 100 km so it is perfect for those travelling on a budget but want to see all of Iceland in a safe and comfortable way.&nbsp;</p>\n\n<p>&nbsp;</p>\n",
      "Text": "<p>Included in the price:</p>\n\n<ul>\n\t<li>Mileage: Unlimited</li>\n\t<li>Free Cancellation upto 48 hrs before arrival</li>\n\t<li>Amendments</li>\n\t<li>Theft Protection</li>\n\t<li>Collision Damage Waiver</li>\n</ul>\n",
      "Title": null,
      "Url": "dacia-duster-4x4-",
      "Keywords": null,
      "Description": null,
      "Image": "/Images/65/renault-duster-moonlight-silver.png",
      "Model": "2016-2017",
      "CustomCode": null,
      "ACRISS": null,
      "Doors": 5,
      "Seats": 5,
      "Beds": 0,
      "LargeBags": 4,
      "SmallBags": 0,
      "MinimumDriverAge": 0,
      "MinimumRentalDays": 2,
      "MaximumRentalDays": -1,
      "AirCondition": true,
      "ForHighland": true,
      "TransmissionId": 23,
      "TransmissionName": "Manual",
      "FuelId": 2,
      "FuelName": "Diesel",
      "DriveId": 1,
      "DriveName": "4WD",
      "Currency": "ISK",
      "Days": 4,
      "Units": 0,
      "UnitPrice": 40000,
      "DiscountPrice": 4000,
      "AdditionalDiscountPrice": 0,
      "TotalDiscountPrice": 4000,
      "TotalPrice": 36000,
      "DailyPrice": 9000,
      "Available": true,
      "GroupName": "4 x 4",
      "Rental": {
        "Id": 65,
        "Name": "Caren Car Rental",
        "CompanyNumber": null,
        "VATNumber": null,
        "ContactName": null,
        "Email": null,
        "Phone": null,
        "Address": null,
        "City": null,
        "State": null,
        "ZipCode": null,
        "CountryId": 0,
        "CountryName": null,
        "Logo": "/Images/65/caren-logo-cropped.png",
        "MinimumBookingHoursInAdvance": null
      },
      "Groups": [
        {
          "Id": 128,
          "Name": "4 x 4",
          "Description": "<p>AWD and 4WD</p>\n"
        }
      ],
      "Images": [],
      "Currencies": [
        {
          "Id": 501,
          "Name": "USD",
          "Default": false,
          "Rate": 0.007851,
          "UnitPrice": 314.04,
          "DailyPrice": 70.659,
          "VehicleDiscountPrice": 31.404,
          "VehicleTotalPrice": 0,
          "LocationPrice": 0,
          "LocationDiscountPrice": 0,
          "LocationTotalPrice": 0,
          "ExtrasPrice": 0,
          "ExtrasTotalDiscountPrice": 0,
          "ExtrasTotalPrice": 0,
          "InsurancesPrice": 0,
          "InsurancesTotalDiscountPrice": 0,
          "InsurancesTotalPrice": 0,
          "ConfirmationPrice": 0,
          "TotalDiscountPrice": 0,
          "TotalPrice": 282.636
        },
        {
          "Id": 529,
          "Name": "EUR",
          "Default": false,
          "Rate": 0.006596,
          "UnitPrice": 263.84,
          "DailyPrice": 59.364,
          "VehicleDiscountPrice": 26.384,
          "VehicleTotalPrice": 0,
          "LocationPrice": 0,
          "LocationDiscountPrice": 0,
          "LocationTotalPrice": 0,
          "ExtrasPrice": 0,
          "ExtrasTotalDiscountPrice": 0,
          "ExtrasTotalPrice": 0,
          "InsurancesPrice": 0,
          "InsurancesTotalDiscountPrice": 0,
          "InsurancesTotalPrice": 0,
          "ConfirmationPrice": 0,
          "TotalDiscountPrice": 0,
          "TotalPrice": 237.456
        }
      ],
      "SeasonPrices": null,
      "Offers": [
        {
          "Id": 2261,
          "Name": "DACIA OFFER",
          "Description": "<ul>\n\t<li>1000 kr discount per day</li>\n</ul>\n"
        }
      ]
    }
  ]
}
*/
export const loadVehicleClasses =  ( data = {} ) => {

   
    return new Promise(async (resolve, reject) => {
        

        try {
          
            const response  = await Request('/api/class/getlist', data);
            console.log('response',response);
            resolve(response);
            
          } catch (error) {

            reject(error);
            console.log('E',error)
            
          }

    });
}

/* Response: 
  {
    "Id": 1269,
    "Name": "Dacia Duster 4x4 DIESEL",
    "Summary": "<p>Dacia Duster 4x4 DIESEL</p>\n",
    "Text": "In 2014 we added the new exciting and fuel efficient Dacia Duster to our fleet. Since then, it has become our most popular choice and our greatest addition. With it&acute;s economical 1.5 diesel engine avarage fuel consumption is 5,3 liters per 100 km so it is perfect for those travelling on a budget but want to see all of Iceland in a safe and comfortable way. The Duster hardly ever gives us a problem, it just keeps on driving and has our lowest problem rate.",
    "Title": null,
    "Url": "dacia-duster-4x4-diesel",
    "Keywords": null,
    "Description": null,
    "Image": "/Images/65/caren_landcruiser_1.jpg",
    "Model": "2016-2017",
    "CustomCode": null,
    "ACRISS": null,
    "Doors": 5,
    "Seats": 5,
    "Beds": 0,
    "LargeBags": 4,
    "SmallBags": 0,
    "MinimumDriverAge": 0,
    "MinimumRentalDays": 2,
    "MaximumRentalDays": -1,
    "AirCondition": false,
    "ForHighland": true,
    "TransmissionId": 23,
    "TransmissionName": "Manual",
    "FuelId": 2,
    "FuelName": "Diesel",
    "DriveId": 1,
    "DriveName": "4WD",
    "Currency": null,
    "Days": 0,
    "Units": 0,
    "UnitPrice": 10000,
    "DiscountPrice": 0,
    "AdditionalDiscountPrice": 0,
    "TotalDiscountPrice": 0,
    "TotalPrice": 0,
    "DailyPrice": 0,
    "Available": false,
    "GroupName": null,
    "Rental": {
      "Id": 0,
      "Name": "Caren Car Rental",
      "CompanyNumber": null,
      "VATNumber": null,
      "ContactName": null,
      "Email": null,
      "Phone": null,
      "Address": null,
      "City": null,
      "State": null,
      "ZipCode": null,
      "CountryId": 0,
      "CountryName": null,
      "Logo": "/Images/65/logo.PNG",
      "MinimumBookingHoursInAdvance": null
    },
    "Groups": null,
    "Images": null,
    "Currencies": null,
    "SeasonPrices": null,
    "Offers": null
  }
*/
export const loadVehicleDetails =  (data = {}) => {

  return new Promise(async (resolve, reject) => {
      

      try {

          const response  = await Request('/api/class/getitem',data);
          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error)
          
        }

  })
}

/* Response:
{
  "Insurances": [
    {
      "Id": 388,
      "Name": "TI - Tire Insurance - All cars",
      "Description": "",
      "Image": null,
      "Price": 2500,
      "MinimumPrice": 2500,
      "MaximumPrice": 12500,
      "PricePerDay": true,
      "Included": false,
      "ClassIds": [],
      "Currencies": [
        {
          "Id": 326,
          "Name": "USD",
          "Default": false,
          "Rate": 0.0082,
          "Price": 20.5,
          "DiscountPrice": 0,
          "TotalPrice": 0
        }
      ],
      "Place": 10
    }
  ]
}

*/
export const loadInsurances =  ( data = {} ) => {

   
  return new Promise(async (resolve, reject) => {
      

      try {

          const response  = await Request('/api/insurance/getlist',data);
          console.log('response',response);
          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error)
          
        }

  })


}

/* Response:
{
  "Extras": [
    {
      "Id": 775,
      "Name": "Child Seat / Toddler Seat",
      "Description": "<p>Child Seat / Toddler Seat</p>\n",
      "Image": null,
      "Price": 5000,
      "MinimumPrice": 5000,
      "MaximumPrice": 10000,
      "PricePerDay": false,
      "Quantity": true,
      "MaximumQuantity": 2,
      "ExtraDriver": false,
      "Included": false,
      "ClassIds": [],
      "Place": 4,
      "Currencies": [
        {
          "Id": 326,
          "Name": "USD",
          "Default": false,
          "Rate": 0.0081,
          "Price": 40.5,
          "DiscountPrice": 0,
          "TotalPrice": 0
        }
      ]
    }
  ]
}

*/
export const loadExtras =  ( data = {} ) => {

   
  return new Promise(async (resolve, reject) => {
      

      try {

          const response  = await Request('/api/extra/getlist',data);
          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error);
        }
  })

}

/* Response:

{
    "Transmissions": [
        {
            "Id": 1,
            "Name": "4-speed automatic"
        },
        {
            "Id": 2,
            "Name": "4-speed manual"
        },
        {
            "Id": 24,
            "Name": "Single Speed"
        }
    ]
}

*/
export const loadTransmissions =  ( data = {} ) => {

   
  return new Promise(async (resolve, reject) => {
      

      try {

          const response  = await Request('/api/transmission/list',data);
          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error);
        }
  })

}


/* Response:
  {
    "Drives": [
      {
        "Id": 1,
        "Name": "4WD"
      },
      {
        "Id": 2,
        "Name": "AWD"
      },
      {
        "Id": 3,
        "Name": "FWD"
      },
      {
        "Id": 4,
        "Name": "RWD"
      }
    ]
  }
*/
export const loadDrives =  ( data = {} ) => {

   
  return new Promise(async (resolve, reject) => {
      

      try {

          const response  = await Request('/api/drive/list',data);
          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error);
        }
  })

}

/* Response:

  {
      "Fuels": [
          {
              "Id": 1,
              "Name": "Biofuel"
          },
          {
              "Id": 2,
              "Name": "Diesel"
          },
          {
              "Id": 17,
              "Name": "Regular Unleaded"
          }
      ]
  }

*/
export const loadFuel =  ( data = {} ) => {

   
  return new Promise(async (resolve, reject) => {
      

      try {

          const response  = await Request('/api/fuel/list',data);
          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error);
        }
  })

}

export const addReservations =  ( data = {} ) => {

   
  return new Promise(async (resolve, reject) => {
      

      try {

          const response  = await Request('/api/reservation/add',data);
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

          const response  = await Request('/api/payment/add',data);
          if(!response) throw new Error('Oops! Something went wrong')

          if(!response.Success) throw new Error(response.Message)

          resolve(response);
          
        } catch (error) {

          reject(error);
          console.log('E',error)
          
        }

  })


}
