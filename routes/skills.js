var express = require('express');
var router = express.Router();

// Require the controller that exports skill CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/todos"

// GET /skills
router.get('/', skillsCtrl.index);
//SHOW
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
//GET /skills/new
router.get('/new', skillsCtrl.new);




module.exports = router;
