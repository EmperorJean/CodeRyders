const express = require('express');
const router = express.Router();
const {
    getExam,
    addExam,
    deleteExam,
    updateExam,
    getOneExam,
} = require('../controllers/examController');


router.get('/', getExam)

router.post('/add', addExam)
router.delete('/delete', deleteExam)
router.post('/update', updateExam)
router.route('/:id').put(updateExam).get(getOneExam)





module.exports = router;
