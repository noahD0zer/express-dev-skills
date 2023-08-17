var express = require('express');
var router = express.Router();

// Require the controller that exports skill CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/todos"

//GET /skills
router.get('/', skillsCtrl.index);
//GET /skills/new
router.get('/new', skillsCtrl.new);
//SHOW
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
//delete
router.delete('/:id', skillsCtrl.delete);





module.exports = router;
