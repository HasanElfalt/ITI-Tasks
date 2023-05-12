
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const logging = require("./Middlewares/loggingMW")

const PORT = process.env.PORT||7010;

//#region MiddleWares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(logging)
//#endregion

const DoctorsRoutes =  require("./Routes/DoctorRoutes");
app.use("/api/doctors", DoctorsRoutes);

const PatientsRoutes =  require("./Routes/PatientRoutes");
app.use("/api/patients", PatientsRoutes);

app.listen(PORT, ()=>{console.log("http://localhost:"+PORT)})