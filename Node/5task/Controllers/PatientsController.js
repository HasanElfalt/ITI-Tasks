const PatientModel = require("../Models/PatientModel");

let GetAllPatients = (req, res) => {
    let AllPatients = PatientModel.GetAllPatients();
    res.status(200).json(AllPatients);
};

let GetPatientById = (req, res) => {
    let id = req.params["id"];
    res.json(PatientModel.GetPatientById(id));
};

let AddNewPatient = (req, res) => {
    let onePatient = req.body;
    let newPatient = new PatientModel(onePatient.name, onePatient.age, onePatient.email, onePatient.password)

    res.json(newPatient.SavePatient());
    
};

let UpdatePatientById = (req, res) => {
    let Id = req.params.id;
    let updatedPatient = req.body;

    let response = PatientModel.UpdatePatient(Id, updatedPatient);

    res.status(response.status).json(response.Message);

};

let DeletePatientById = (req, res) => {

    let Id = req.params.id;
    
    let response = PatientModel.DeletePatient();
    res.json({ Message:  response.Message});
};

module.exports = {
    GetAllPatients,
    GetPatientById,
    AddNewPatient,
    UpdatePatientById,
    DeletePatientById
}