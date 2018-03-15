const Router = require('express').Router();
const Users  = require('./userModel.js');
const Events  = require('./eventModel.js');

Router.post('/login', function (req, res){

  let usuario = req.body.user
  let password = req.body.pass

  Users.findOne({user: this.usuario}).exec(function(err, doc){
    console.log(doc.password);
    console.log(password);
      if (err) {
          res.status(500)
          res.json(err)
      }
      if(doc.password == password){
        res.send("Validado")
      }
  })

})
Router.get('/all', function (req, res){
    Events.find({}).exec(function(err, docs) {
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(docs)
    })
  })
Router.get('/:id', function (req, res){

})
Router.post('/new', function (req, res){

})
Router.post('/delete', function (req, res){

})

module.exports= Router
