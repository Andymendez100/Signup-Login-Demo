const session = require('express-session');
const passport = require('passport');
const exphbs = require('express-handlebars');

module.exports = (app) => {

    app.use(session({ secret: 'forBootcamp', resave: true, saveUninitialized: true })); // session secret

    app.use(passport.initialize());

    app.use(passport.session()); // persistent login sessions

    // Set Handlebars as the default template engine
    app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

    require('./views/index')(app);

    app.get('/', (req, res) => {
        res.send('server is up')
    });
};