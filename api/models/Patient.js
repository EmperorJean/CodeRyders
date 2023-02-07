const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    _id: String,
    patientId: String,
    age: Number,
    sex: String,
    zipCode: String,
    bmi: Number,
    __v: Number,
    examId: String,
    keyFindings: String,
    brixiaScores: String,
    imageURL: String
});

module.exports = mongoose.model("Patients", PatientSchema);