const bcrypt = require('bcrypt');

const generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = generateHash;