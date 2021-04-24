const skills = [
    {id: 123, skill: "HTML"},
    {id: 456, skill: "CSS"},
    {id: 789, skill: "Googling Stuff"},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}