//models/skills.js
const skills = [
    {id: 125223, skill: 'Coding', have: true},
    {id: 127904, skill: 'Sleeping', have: false},
    {id: 139608, skill: 'Eating', have: true}
];
	
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.have = false;
    skills.push(skill);
  }

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}
