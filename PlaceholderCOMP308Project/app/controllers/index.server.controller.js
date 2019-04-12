// Create a new 'render' controller method
exports.render = function (req, res) {
    // Set the safe user object 
    const user = (!req.user) ? null : {
        _id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        isPatient: req.user.isPatient,
        email: req.user.email
    };
    // Use the 'response' object to render the 'index' view with a 'title' and 'user' properties
    res.render('index', {
        title: 'Emergin Project',
        user: JSON.stringify(user)
    });
};