import React from "react";
import axios from "axios";
//import { doAuth } from "./apis/vehicle.api";


const Request = async (path, data = {}) => {
  
  const header = {"content-type": "application/json"};


  try {
    const response = await axios.get(`http://localhost:4000${path}`, data, {
      headers: header,
      crossDomain: true,
    });


    if(response.data.Code && response.data.Code == 403){
      // DO Login 
      //await doAuth(true);

    }

    return response.data;

  } catch (error) {
    console.log(error);
    return false;
  }

};

export default Request;
