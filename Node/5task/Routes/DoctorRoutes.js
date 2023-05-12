const express = require("express");
const router = new express.Router();
const doctorController = require("../Controllers/DoctorsController")

//#region Doctors End Pointes
// Get All Doctors
router.get("/", doctorController.GetAllDoctors);
// Get doctor by Id
router.get("/:id", doctorController.GetDoctorById);

//Add new Doctor
router.post("/create", doctorController.AddNewDoctor);

//Update Doctor
router.put("/update/:id", doctorController.UpdateDoctorById);

//delete Doctor
router.delete("/delete/:id", doctorController.DeleteDoctorById);

module.exports = router;
//#endregion