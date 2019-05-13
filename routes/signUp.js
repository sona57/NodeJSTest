var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var firstName = req.body.firstName,
      lastName = req.body.lastName,
      email = req.body.email,
      password = req.body.password;
console.log('global',global);  
  if(firstName.trim().length===0 || lastName.trim().length===0 || email.length===0 || password.length===0)
    res.send('First Name, Last Name, Email and password cannot be empty');
  global.userData.push(req.body);
  res.render('profile', { title: 'Edit Profile', formData:req.body, buttonValue:'EDIT' });
});

module.exports = router;
