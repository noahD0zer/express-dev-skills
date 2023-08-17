//models/skills.js
const skills = [
    {id: 125223, skill: 'Coding', have: true},
    {id: 127904, skill: 'Sleeping', have: false},
    {id: 139608, skill: 'Eating', have: true}
];
	
module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}
