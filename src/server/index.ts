import express from "express";
import { api } from "./api";
import axios from "axios";
import { CAREN_API_URL, RENTAL_ID } from "./globals";
import cors from "cors";

const port = 3002;
const app = express();
const metadata = {
    session: null
};

// API REFERENCE (CTRL + click): https://apidocs.caren.io/#c1c91f63-2fc9-43ba-8c94-5dec8be6b069

// configure app
app.use(cors({ origin: /http:\/\/localhost/ }));

app.get("/api/getpickuplist", async (req,res) => {

   console.log("login");
    if(!metadata.session)
        await login();
    console.log("login done");

    const config = {
        method: 'post',
        url: `${CAREN_API_URL}/location/getpickuplist`,
        headers: { 'Content-Type': 'application/json'},
        data: {
            Session: metadata.session,
            RentalId: RENTAL_ID,
            Language: "en-GB",
            SortColumn: req.params['SortColumn'],
            SortDirection: req.params['SortDirection'],
            ShowHours: true
        }
    }

    let response = await axios.get(`${CAREN_API_URL}/location/getpickuplist`, config);
    console.log(JSON.stringify(response.data));

    res.send(response.data);
});

app.get("/api/class/getlist", async (req,res) => {

    console.log("login");
     if(!metadata.session)
         await login();
     console.log("login done");
 
     let dateFrom = req.params['DateFrom']
     let dateTo = req.params['DateTo'];
     let pickUpLocationId = req.params['PickupLocationId'];
     const config = {
         method: 'post',
         url: `${CAREN_API_URL}/class/getlist`,
         headers: { 'Content-Type': 'application/json'},
         data: {
             Session: metadata.session,
             RentalId: RENTAL_ID,
             Language: "en-GB",
             DateFrom: dateFrom, 
             DateTo: dateTo,
             PickUpLocationId: pickUpLocationId,
             skipDateCheck: !dateFrom || !dateTo,
         }
     }
 
     let response = await axios.get(`${CAREN_API_URL}/class/getlist`, config);
     console.log(JSON.stringify(response.data));
     
     res.send(response.data);
 });

 app.get("/api/group/list", async (req,res) => {

    console.log("login");
     if(!metadata.session)
         await login();
     console.log("login done");
 
     let dateFrom = req.params['DateFrom']
     let dateTo = req.params['DateTo'];
     let pickUpLocationId = req.params['PickupLocationId'];
     const config = {
         method: 'post',
         url: `${CAREN_API_URL}/group/list`,
         headers: { 'Content-Type': 'application/json'},
         data: {
             Session: metadata.session,
             RentalId: RENTAL_ID,
             Language: "en-GB",
             PickUpLocationId: pickUpLocationId,
         }
     }
 
     let response = await axios.get(`${CAREN_API_URL}/group/list`, config);
     console.log(JSON.stringify(response.data));
     
     res.send(response.data);
 });

 app.get("/api/class/getitem", async (req,res) => {
 
    console.log("login");
     if(!metadata.session)
         await login();
     console.log("login done");
 
     const config = {
         method: 'post',
         url: `${CAREN_API_URL}/extra/getlist`,
         headers: { 'Content-Type': 'application/json'},
         data: {
             Session: metadata.session,
             RentalId: RENTAL_ID,
             Language: "en-GB",
             Id: req.params['Id'],
             ShowImages: true,
             ShowGroupNames: true,
         }
     }
 
     let response = await axios.get(`${CAREN_API_URL}/class/getitem`, config);
     console.log(JSON.stringify(response.data));
 
     res.send(response.data);
 });

 app.get("/api/insurance/getlist", async (req,res) => {

    console.log("login");
     if(!metadata.session)
         await login();
     console.log("login done");
 
     const config = {
         method: 'post',
         url: `${CAREN_API_URL}/insurance/getlist`,
         headers: { 'Content-Type': 'application/json'},
         data: {
             Session: metadata.session,
             RentalId: RENTAL_ID,
             Language: "en-GB",
             SortColumn: req.params['SortColumn'],
             SortDirection: req.params['SortDirection'],
         }
     }
 
     let response = await axios.get(`${CAREN_API_URL}/location/getpickuplist`, config);
     console.log(JSON.stringify(response.data));
 
     res.send(response.data);
 });

 app.get("/api/extra/getlist", async (req,res) => {

    console.log("login");
     if(!metadata.session)
         await login();
     console.log("login done");
 
     const config = {
         method: 'post',
         url: `${CAREN_API_URL}/extra/getlist`,
         headers: { 'Content-Type': 'application/json'},
         data: {
             Session: metadata.session,
             RentalId: RENTAL_ID,
             Language: "en-GB",
             SortColumn: req.params['SortColumn'],
             SortDirection: req.params['SortDirection'],
         }
     }
 
     let response = await axios.get(`${CAREN_API_URL}/extra/getlist`, config);
     console.log(JSON.stringify(response.data));
 
     res.send(response.data);
 });

 app.get("/api/drive/list", async (req,res) => {

    console.log("login");
     if(!metadata.session)
         await login();
     console.log("login done");
 
     const config = {
         method: 'post',
         url: `${CAREN_API_URL}/extra/getlist`,
         headers: { 'Content-Type': 'application/json'},
         data: {
             Session: metadata.session,
         }
     }
 
     let response = await axios.get(`${CAREN_API_URL}/drive/list`, config);
     console.log(JSON.stringify(response.data));
 
     res.send(response.data);
 });

 
 app.get("/api/transmission/list", async (req,res) => {

    console.log("login");
     if(!metadata.session)
         await login();
     console.log("login done");
 
     const config = {
         method: 'post',
         url: `${CAREN_API_URL}/extra/getlist`,
         headers: { 'Content-Type': 'application/json'},
         data: {
             Session: metadata.session,
         }
     }
 
     let response = await axios.get(`${CAREN_API_URL}/transmission/list`, config);
     console.log(JSON.stringify(response.data));
 
     res.send(response.data);
 });

 app.get("/api/fuel/list", async (req,res) => {

    console.log("login");
     if(!metadata.session)
         await login();
     console.log("login done");
 
     const config = {
         method: 'post',
         url: `${CAREN_API_URL}/extra/getlist`,
         headers: { 'Content-Type': 'application/json'},
         data: {
             Session: metadata.session,
         }
     }
 
     let response = await axios.get(`${CAREN_API_URL}/fuel/list`, config);
     console.log(JSON.stringify(response.data));
 
     res.send(response.data);
 });

 // FINAL SHIT FOR BOOKING: Figure this out...
 app.get("/api/reservation/add", async (req,res) => {

    console.log("login");
     if(!metadata.session)
         await login();
     console.log("login done");
 
     const config = {
         method: 'post',
         url: `${CAREN_API_URL}/extra/getlist`,
         headers: { 'Content-Type': 'application/json'},
         data: {
             Session: metadata.session,
             RentalId: RENTAL_ID,
             Language: "en-GB",
             SortColumn: req.params['SortColumn'],
             SortDirection: req.params['SortDirection'],
         }
     }
 
     let response = await axios.get(`${CAREN_API_URL}/reservation/add`, config);
     console.log(JSON.stringify(response.data));
 
     res.send(response.data);
 });
 
 // FINAL SHIT FOR BOOKING: Figure this out...
app.get("/api/payment/add", async (req,res) => {

    console.log("login");
    if(!metadata.session)
        await login();
    console.log("login done");

    const config = {
        method: 'post',
        url: `${CAREN_API_URL}/extra/getlist`,
        headers: { 'Content-Type': 'application/json'},
        data: {
            Session: metadata.session,
            RentalId: RENTAL_ID,
            Language: "en-GB",
            SortColumn: req.params['SortColumn'],
            SortDirection: req.params['SortDirection'],
        }
    }

    let response = await axios.get(`${CAREN_API_URL}/payment/add`, config);
    console.log(JSON.stringify(response.data));

    res.send(response.data);
});

 // FINAL SHIT FOR BOOKING: Figure this out...
 app.get("/api/payment/add", async (req,res) => {
 
    console.log("login");
     if(!metadata.session)
         await login();
     console.log("login done");
 
     const config = {
         method: 'post',
         url: `${CAREN_API_URL}/extra/getlist`,
         headers: { 'Content-Type': 'application/json'},
         data: {
             Session: metadata.session,
             RentalId: RENTAL_ID,
             Language: "en-GB",
             SortColumn: req.params['SortColumn'],
             SortDirection: req.params['SortDirection'],
         }
     }
 
     let response = await axios.get(`${CAREN_API_URL}/payment/add`, config);
     console.log(JSON.stringify(response.data));
 
     res.send(response.data);
 });


// register all routes
//app.use(api);
//app.use(api, router);

app.listen(port, () => console.log("Started"));

async function login()
{
    const response = await axios.post(`${CAREN_API_URL}/user/login`, {
        apiKey: "8f4cc0ddce49b87d928c1005271adc95a9e9b022",
        username: "API@Keycarrental.is",
        password: "&8s&drokN&KRPyZo"
    });
    
    if(response && response.data.Success)
        metadata.session = response.data.Session;
    else console.log("error", response.data);
}