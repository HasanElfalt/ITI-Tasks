const express = require("express");
const router = express();
const PatientControllers = require("../Controllers/PatientsController")

//#region Patients End Pointes
// Get All Patients
router.get("/", PatientControllers.GetAllPatients);
// Get Patient by Id
router.get("/:id", PatientControllers.GetPatientById);

//Add new Patient
router.post("/create", PatientControllers.AddNewPatient);

//Update Patient
router.put("/update/:id", PatientControllers.UpdatePatientById);

//delete Patient
router.delete("/delete/:id", PatientControllers.DeletePatientById);

module.exports = router;
//#endregion