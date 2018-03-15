const Router = require('express').Router();
const Users  = require('./userModel.js');
const Events  = require('./eventModel.js');

// Funcion para el login de la pagina
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
// Obtener los eventos del usuario
Router.get('/all', function (req, res){
    Events.find({}).exec(function(err, docs) {
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(docs)
    })
  })

Router.post('/new', function (req, res){
  console.log(req);
  let evento = new Events({
      title: req.body.title,
      start: req.body.start,
      start_hour: req.start_hour,
      end: req.body.end,
      end_hour:req.body.end_hour
  })
  evento.save(function(error) {
      if (error) {
          res.status(500)
          res.json(error)
      }
      res.send("Registro guardado")
  })
})

Router.post('/delete', function (req, res){

})

module.exports= Router
