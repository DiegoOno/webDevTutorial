function save(req, res) {
    res.send('User > save');
}

function getUser(req, res) {
    res.send('User > get');
}

module.exports = { save, getUser };