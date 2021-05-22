const signUpUser = require('../../controllers/signUpUser');
const signInUser = require('../../controllers/signInUser');

module.exports = (passport, User) => {

    const LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, signUpUser));


    passport.use('local-signin', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, signInUser));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findByPk(id).then((user) => {
            if (user) {
                return done(null, user.get());
            }
            else {
                done(user.errors, null)
            }
        });
    });

}