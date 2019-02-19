var express = require('express');
var router = express.Router();

/* /*post method for hw1 task2  */
router.get('/get', function(req, res, next) {
  res.send(JSON.stringify({string: 'Hi This is Tianyi Sun API'}));

});

module.exports = router;
