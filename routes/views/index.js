const { signin, signup, dashboard } = require('../../controllers/handlebarRenders');

module.exports = (app) => {

    app.get('signup', signup);

    app.get('signin', signin);

    app.get('dashboard', dashboard );

}