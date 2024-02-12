var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
let products=[
  {
    name:"neem oil",
    weight:"50g",
    description:"good for dandruff",
    image:"https://as1.ftcdn.net/v2/jpg/06/81/12/68/1000_F_681126806_qxs17NZG22oNIFsdLppuQ1RL6kRKgNfk.jpg"
  },
  {
    name:"neem oil",
    weight:"50g",
    description:"good for dandruff",
    image:"https://as1.ftcdn.net/v2/jpg/06/81/12/68/1000_F_681126806_qxs17NZG22oNIFsdLppuQ1RL6kRKgNfk.jpg"
  },
  {
    name:"neem oil",
    weight:"50g",
    description:"good for dandruff",
    image:"https://as1.ftcdn.net/v2/jpg/06/81/12/68/1000_F_681126806_qxs17NZG22oNIFsdLppuQ1RL6kRKgNfk.jpg"
  },
  {
    name:"neem oil",
    weight:"50g",
    description:"good for dandruff",
    image:"https://as1.ftcdn.net/v2/jpg/06/81/12/68/1000_F_681126806_qxs17NZG22oNIFsdLppuQ1RL6kRKgNfk.jpg"
  },
  {
    name:"neem oil",
    weight:"50g",
    description:"good for dandruff",
    image:"https://as1.ftcdn.net/v2/jpg/06/81/12/68/1000_F_681126806_qxs17NZG22oNIFsdLppuQ1RL6kRKgNfk.jpg"
  }
]




  res.render('index', {products});
});

module.exports = router;
