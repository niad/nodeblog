var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var users = [];

  users.push({id:"1", name:"사용자 1", email:"user1@niad.pe.kr", type:"MEMBER"});
  users.push({id:"2", name:"사용자 2", email:"user2@niad.pe.kr", type:"MEMBER"});
  users.push({id:"3", name:"사용자 3", email:"user3@niad.pe.kr", type:"MEMBER"});



  var jsonMsg = {
    page: 1,
    total: 1,
    records: 3,
    rows : users
  };


  res.send('user/users', jsonMsg);

});

module.exports = router;
