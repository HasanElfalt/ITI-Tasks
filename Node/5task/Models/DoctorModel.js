const doctorValidate = require("../utils/doctorSchema")

var Doctors=[]; // id, name, age, email, password, specialization, patients
var doctor_id=0;

class Doctor{

    constructor(name, age, email, password, specialization, patients){
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.specialization = specialization;
        this.patients = patients;
    }

    static GetAllDoctors(){
        return Doctors;
    }

    static GetDoctorById(id){
        let foundDoctor = Doctors.find((doctor) => { return doctor.id == id }); 
        return foundDoctor;
    }

    static UpdateDoctor(Id, updatedDoctor){
        if (doctorValidate(updatedDoctor)) {
            //console.log("success");
            let foundDoctor = Doctors.find((doctor) => { return doctor.id == Id });
    
            foundDoctor.name = updatedDoctor.name;
            foundDoctor.age = updatedDoctor.age;
            foundDoctor.email = updatedDoctor.email;
            foundDoctor.password = updatedDoctor.password;
            foundDoctor.specialization = updatedDoctor.specialization;
            foundDoctor.patients = updatedDoctor.patients;
    
            return { Message: "Updated Successfully", status:200 }
        } else {
            //console.log("failed");
            return {message:"check the entered data", status:400};
        }
    }

    static DeleteDoctor(Id){

        let foundDoctorIndex = Doctors.findIndex((d) => { return d.id == Id });

        Doctors.splice(foundDoctorIndex, 1);
        return { Message: "Deleted Successfully", status:200 }
    }

    SaveDoctor(){

        if (doctorValidate(this)) {
            doctor_id++;
            this.id = doctor_id;
            Doctors.push(this);
            return { Message: "Created Successfully", data: this }
        } else {
            return {message:"check the entered data"};
        }
    }

}

module.exports = Doctor;