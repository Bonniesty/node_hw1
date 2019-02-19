var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/index', function(req, res, next) {
//    res.render('index', { title: 'xxxx' }
//    );
//  });

/*post method for hw1 task3 */
router.post('/post', function(req, res, next) {
  res.send(req.body);

});

module.exports = router;
