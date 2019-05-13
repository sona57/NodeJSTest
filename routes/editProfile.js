var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    res.render('signUp', { title: 'Save Profile', formData:req.body, signUpOrSave:'SAVE' })
});

module.exports = router;
