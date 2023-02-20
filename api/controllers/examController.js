const asyncHandler = require('express-async-handler')
const Exam = require('../models/Patient');





// @desc    Get all Exams
// @route   GET /Exam/

const getExam = asyncHandler(async (req, res) => {
    const exam = await Exam.find({ user: req.params.id })
    res.status(200).json(exam)

  })

  // @desc    Post an Exam
// @route   POST /Exam/add

  const addExam = asyncHandler(async (req, res) => {
      try{
            if (!req.body) {
      res.status(400)
      throw new Error('Please complete all of the desired feilds')
    }
    

  
    const exam = await Exam.create({
    //   id: req.body.id,

      patientId: req.body.patientId,
      age: req.body.age,
      sex: req.body.sex,
      bmi: req.body.bmi,
      zipCode: req.body.zipCode,
      __v: req.body.__v,
      examId: req.body.examId,
      keyFindings: req.body.keyFindings,
      brixiaScores: req.body.brixiaScores,
      imageURL: req.body.imageURL,  

  }); 

  res.status(200).json(exam)
      }catch (err) {
        console.log(err);

      }


 })

  // @desc    Get all ONE exam
// @route   GET /Exam/:ID

 const getOneExam = asyncHandler(async (req, res) => {
    const exam = await Exam.findById(req.params.id)
    res.status(200).json(exam)
})  

// @desc    Update patient
// @route   PUT /exam/:id

const updateExam = asyncHandler(async (req, res) => {
  const exam = await Exam.findById(req.params.id)

  if (!exam) {
    res.status(400)
    throw new Error('Exam not found')
  }



  const updatedExam = await Exam.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedExam)
})

// // @desc    Delete patient
// // @route   DELETE /exam/:id

const deleteExam = asyncHandler(async (req, res) => {
  const exam = await Exam.findById(req.params.id)

  if (!exam) {
    res.status(400)
    throw new Error('Exam not found')
  }



  await exam.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
    getExam,
    addExam,
    deleteExam,
    updateExam,
    getOneExam,
}
