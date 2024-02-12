var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/product-helpers')
//var MongoClient=require('mongodb').MongoClient
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
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


  res.render('admin/view-products', {admin:true,products})
});
router.get('/add-product', function(req,res){
res.render('admin/add-product')

})
 router.post('/add-product',(req,res)=>{  
   console.log(req.body);
   console.log(req.files.Image);
   productHelper.addProduct(req.body,(result)=>{
    res.render("admin/add-product")
   })

 })
//   MongoClient.connect('mongodb://localhost:27017',function(err,client){
// if(err)
// console.log('error')
// else
// client.db('cropp').collection('user').insertOne(req.body)
// console.log('database connected')
//   })
//   res.send('got it')
// })


module.exports = router;
