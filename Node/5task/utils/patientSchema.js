const Ajv = require("ajv");
const ajv = new Ajv();

const PatientSchema={
    type:"object",
    properties:{
        name:{type:"string"},
        age:{type:"number"},
        email:{type:"string"},
        password:{type:"string"}
    },
    required:["name", "age","email", "password"],
    additionalProperties:false
}
module.exports = ajv.compile(PatientSchema);
