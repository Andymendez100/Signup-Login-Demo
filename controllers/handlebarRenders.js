const signup = (req, res) => {
res.render('signup')
};

const signin = (req, res) => {
    res.render('signin')
};

const dashboard = (req, res) => {
    res.render('dashboard')
};

module.exports = {
    signup,
    signin,
    dashboard
}