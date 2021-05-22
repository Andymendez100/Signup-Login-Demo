const signUpUser = require('../../controllers/signUpUser');

module.exports = (passport, User) => {

    const LocalStrategy = require('passport-local').Strategy;
    
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, signUpUser));
}