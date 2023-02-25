const PATIENT = require('../models/Patient');


const getPatient = async (req, res) => {
  

  var data = await doGetPatient()
  return res.status(200).json({
    success: true,
    message: data
  });
}

const getPatientWithId = async (req, res) => {
  
    var data = await doGetPatientWithId(req.params.id);
  
    return res.status(200).json({
      success: true,
      message: data
    });
  }

const doGetPatientWithId = async(id) => {
  patient = await PATIENT.find({
    patientId: id,
  });

if(!patient) return `No patient found with that Id`; 
return patient;
}

const doGetPatient = async() => {
patients = await PATIENT.find({
        }).sort([
            ['patientId', 'ascending']
        ])

return patients;
        
}




module.exports = {
  getPatient,
  getPatientWithId
};
