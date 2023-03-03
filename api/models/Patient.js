const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    patientId: {
      type: String,
      required: [true, 'Please add patient ID'],
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
        type: String,
        required : true 
    },
    bmi: {
        type: Number,
        required: true
      },
    zipCode: {
        type: Number,
        required: true,

      },
    examId: {
        type: String,
        required: true
      },
    // __v: {
    //     type: Number,
    //     required: true
    //   },
    keyFindings: {
        type: String,
        required: true
      },
    brixiaScores: {
        type: String,
        required: true
      },
    imageURL: {
        type: String,
        required: true
      },
    
},
{
  timestamps: true,
});

module.exports = mongoose.model("Patient", PatientSchema);