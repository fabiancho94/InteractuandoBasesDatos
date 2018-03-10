const http       = require('http'),
      path       = require('path'),
      express    = require('express'),
      Routing    = require('./rutas.js'),
      bodyParser = require('body-parser'),
      User       = require('./userModel.js'),
      mongoose   = require('mongoose');

const PORT = 8082
const app = express()

const Server = http.createServer(app)


mongoose.connect('mongodb://localhost/agenda')


usuarioInicial()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('client'))

app.use('/event', Routing)

Server.listen(PORT, function(){
  console.log('Servidor escuchando en el puerto : ' + PORT);
})

function usuarioInicial(){

  User.findOne({id: 2}).exec(function(err, res){
      if (err) console.log(err);
      if(!res){
        let nuevo = new User({
          id: 2,
          email:"prueba@test.com",
          password:"1234"})

        nuevo.save((err)=>{
        if (err)console.log(err);
        console.log("Usuario inicial creado");
    })
      }
  })


}
