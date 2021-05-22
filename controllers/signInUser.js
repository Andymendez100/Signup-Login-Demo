const User = require('../models/User');
const isValidPassword = require('../utils/isValidPassword');

const signInUser = (req, email, password, done) => {
    User.findOne({
        where: {
            email: email
        }
    }).then((user) => {
        if (!user) {
            return done(null, false, {
                message: "Email doesn't exist"
            });
        }

        if (!isValidPassword(user.password, password)) {
            return done(null, false, {
                message: 'incorrect password'
            });
        }

        return done(null, user.get());
    }).catch((err) => {
        console.error("Error in signin user", err);
        return done(null, false, {
            message: 'Something went wrong with signin'
        })
    })
};

module.exports = signInUser;