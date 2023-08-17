const skills = [
    {id: 125223, todo: 'Coding', done: true},
    {id: 127904, todo: 'Sleeping', done: false},
    {id: 139608, todo: 'Eating', done: true}
];
	
module.exports = {
    getAll
};
	
function getAll() {
    return skills;
}