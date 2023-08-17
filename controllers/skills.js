const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}


function create(req, res) {
  console.log(req.body);
  // model responsible for crudding data
  Skill.create(req.body);
  // do a redirect anytime data is changed
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', { title: 'New Skill' });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
  });
}

function index(req, res) {
  console.log('Calling Skill.getAll()');
  const skills = Skill.getAll();
  console.log('Skills:', skills);
  res.render('skills/index', {
    skills: skills
  });
}
