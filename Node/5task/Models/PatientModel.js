const patientValidate = require("../utils/patientSchema");

var Patients=[]; // id, name, age, email, password
var patient_id=0;

class Patient{

    constructor(name, age, email, password){
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }

    static GetAllPatients(){
        return Patients;
    }

    static GetPatientById(Id){
        let foundPatient = Patients.find((patient) => { return patient.id == Id });
        return foundPatient;
    }

    static UpdatePatient(Id, updatedPatient){

        if (patientValidate(updatedPatient)) {
            let foundPatient = Patients.find((patient) => { return patient.id == Id });
    
            foundPatient.name = updatedPatient.name;
            foundPatient.age = updatedPatient.age;
            foundPatient.email = updatedPatient.email;
            foundPatient.password = updatedPatient.password;
            foundPatient.specialization = updatedPatient.specialization;
            foundPatient.patients = updatedPatient.patients;
            
            return { Message: "Updated Successfully", status:200 }

        } else {
            return {message:"check the entered data", status:400};
        }
    }

    static DeletePatient(Id){
        
        let foundPatientsIndex = Patients.findIndex((p) => { return p.id == Id });

        Patients.splice(foundPatientsIndex, 1);

        return { Message: "Deleted Successfully", status:200 }
    }

    SavePatient(){
        if (patientValidate(this)) {
            patient_id++;
            this.id = patient_id;
            Patients.push(this);

            return { Message: "Created Successfully", data: this }

        } else {
            return("check the entered data");
        }
    }
}

module.exports = Patient;
