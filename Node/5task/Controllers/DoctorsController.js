const DoctorModel = require("../Models/DoctorModel");

let GetAllDoctors =  (req, res) => {
    let AllDoctors = DoctorModel.GetAllDoctors();
    res.status(200).json(AllDoctors);
}

let GetDoctorById = (req, res) => {
    let id = req.params["id"];
    res.json(DoctorModel.GetDoctorById(id));
}

let AddNewDoctor=  (req, res) => {
    let oneDoctor = req.body;
    let newDoctor = new DoctorModel(oneDoctor.name, oneDoctor.age, oneDoctor.email, oneDoctor.password, oneDoctor.specialization, oneDoctor.patients)
    res.json(newDoctor.SaveDoctor());
};

let UpdateDoctorById = (req, res) => {
    let Id = req.params.id;
    let updatedDoctor = req.body;

    let response = DoctorModel.UpdateDoctor(Id, updatedDoctor);
    res.status(response.status).json(response.Message);
};

let DeleteDoctorById = (req, res) => {

    let Id = req.params.id;
    
    let response = DoctorModel.DeleteDoctor(Id);
    res.json({ Message: response.Message });
};

module.exports = {
    GetAllDoctors,
    GetDoctorById,
    AddNewDoctor,
    UpdateDoctorById,
    DeleteDoctorById
};