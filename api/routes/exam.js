const express = require('express');
const router = express.Router();
const {
    getExam,
    addExam,
    deleteExam,
    updateExam,
    getOneExam,
} = require('../controllers/examController');

//const {requireAuth} = require("../middleware/authMiddleware");
// require auth for all exams routes
//router.use(requireAuth);

router.get('/', getExam)

router.post('/add', addExam)
router.post('/delete', deleteExam)
router.post('/update', updateExam)
router.route('/:id').put(updateExam).get(getOneExam)





module.exports = router;
