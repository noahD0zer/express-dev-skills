const Skill = require('../models/skill');

module.exports = {
    index
};

function index(req, res) {
  try {
      const skills = Skill.getAll();
      res.render('skills/index', {
          skills: skills
      });
  } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
  }
}

function index(req, res) {
  console.log('Calling Skill.getAll()');
  const skills = Skill.getAll();
  console.log('Skills:', skills);
  res.render('skills/index', {
      skills: skills
  });
}

