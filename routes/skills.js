var express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');
//require the Skill model
// const Skill = require('../models/skill');

/* GET users listing. */


router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);
// get rid of this ^?




module.exports = router;
