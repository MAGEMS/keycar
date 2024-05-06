import express from "express";
import { api } from "./api";
import axios from "axios";
import { CAREN_API_URL } from "./api-urls";
import cors from "cors";

const port = 3002;
const app = express();
const metadata = {
    session: null
};

// configure app
app.use(cors({ origin: /http:\/\/localhost/ }));
//app.options('*', cors());

// configure routes
/*const router = express.Router();

router.get("/api/getpickuplist", (req, res) => {

    const response = axios.post(`${CAREN_API_URL}/user/login`, {
        apiKey: "8f4cc0ddce49b87d928c1005271adc95a9e9b022",
        username: "API@Keycarrental.is",
        password: "&8s&drokN&KRPyZo"
    }); 
    console.log(response);
    res.send("Hello");
});*/


app.get("/api/getpickuplist", async (req,res) => {
   // res.send(`${CAREN_API_URL}/user/login`);
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
            RentalId: 100,
            Language: "en-GB",
            SortColumn: "Name",
            SortDirection: "Asc",
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
 
     const config = {
         method: 'post',
         url: `${CAREN_API_URL}/class/getlist`,
         headers: { 'Content-Type': 'application/json'},
         data: {
             Session: metadata.session,
             RentalId: 100,
             Language: "en-GB",
             skipDateCheck: true, // TODO; possibly pass this in, + DateFrom and DateTo
         }
     }
 
     let response = await axios.get(`${CAREN_API_URL}/class/getlist`, config);
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