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
router.route('/:id').delete(deleteExam).put(updateExam).get(getOneExam)




module.exports = router;
