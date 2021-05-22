const User = require('../models/User');
const generateHash = require('../utils/generanteHash');

const signUpUser = (req, email, password, done) => {
    User.findOne({
        where: {
            email: email
        }
    }).then((user) => {
        if (user) {
            return done(null, false, {
                message: 'That email is taken, Enter a new email'
            });
        }
        else {
            const userPassword = generateHash(password);

            const data = {
                email,
                password: userPassword,
                firstname: req.body.firstname,
                lastname: req.body.lastname
            }

            User.create(data).then((newUser) => {
                if (!newUser) {
                    return done(null, false)
                } else {
                    return done(null, newUser);
                }
            });
        }
    });
};

module.exports = signUpUser;