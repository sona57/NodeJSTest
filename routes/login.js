var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var email=req.body.email, password=req.body.password;
    for(var i=0;i<global.userData.length;i++){
        if(global.userData[i].email===email && global.userData[i].password===password )
        {
            res.render('profile', { title: 'Edit Profile', formData:global.userData[i], buttonValue:'EDIT' });
            break;
        }
    }
    res.render('User not found');

  //res.render('signUp', { title: 'Sign up', formData:req.body, signUpOrSave:'SIGN IN' });
});

module.exports = router;
