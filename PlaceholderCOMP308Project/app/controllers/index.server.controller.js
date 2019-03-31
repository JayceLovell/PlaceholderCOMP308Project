exports.render = function (req, res) {
    const user = (!req.user) ? null : {
        _id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        isPatient: req.user.isPatient
    };

    res.render('index', {
        title: 'Group Project',
        user: JSON.stringify(user)
    });
};