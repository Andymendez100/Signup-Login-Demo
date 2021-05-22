const { signin, signup, dashboard } = require('../../controllers/handlebarRenders');
const isLoggedIn = require('../../middlewares/isLoggedIn');

module.exports = (app) => {

    app.get('/signup', signup);

    app.get('/signin', signin);

    app.get('/dashboard', isLoggedIn, dashboard);

}