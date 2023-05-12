
const Ajv = require("ajv");
const ajv = new Ajv();

const DoctorSchema={
    type:"object",
    properties:{
        name:{type:"string"},
        age:{type:"number", minimum:10},
        email:{type:"string"},
        password:{type:"string"},
        specialization:{type:"string"},
        patients:{type:"array", items:{type:"number"}}
    },
    required:["name", "email", "password", "specialization"],
    additionalProperties:false
}
module.exports = ajv.compile(DoctorSchema);