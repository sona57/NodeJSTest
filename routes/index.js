var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signUp', { title: 'Sign up', formData:req.body, signUpOrSave:'SIGN IN' });
});

module.exports = router;
