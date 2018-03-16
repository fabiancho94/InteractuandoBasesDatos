const Router = require('express').Router();
const Events  = require('./eventModel.js');
const Users  = require('./userModel.js');

// Funcion para el login de la pagina
Router.post('/login', function (req, res){

  let usuario = req.body.user
  let password = req.body.pass

  Users.findOne({user: this.usuario}).exec(function(err, doc){
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
  let data = new Events({
        id: Math.floor(Math.random() * 50),
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    })
  data.save(function (err) {
    if (err){
      res.status(500)
      res.json(err)
    }
    res.send("Registro almacenado")
    })
  })

  Router.post('/delete/:id', function(req, res) {

      Events.remove({id: req.params.id}, function(error) {
          if(error) {
              res.status(500)
              res.json(error)
          }
          res.send("Registro eliminado")
      })
  })
  Router.post('/update/:id', function(req, res) {
    Events.find({}).exec((error, resultado)=>{
      if(error) res.json(error)
      console.log(resultado);
      Events.update({id:req.body.id},req.body,(err,act) =>{
        if(err)res.json(err)
        res.send("Evento Actualizado")
      } )
    })

  })
module.exports= Router
