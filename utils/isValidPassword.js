const bcrypt = require('bcrypt');

const isValidPassword = (userpassword, password) => {
    return bcrypt.compareSync(password, userpassword);
};

module.exports = isValidPassword;