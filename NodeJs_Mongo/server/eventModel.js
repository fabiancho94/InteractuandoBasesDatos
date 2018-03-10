const mongoose = require('mongoose')
	const Schema = mongoose.Schema

	let EventSchema = new Schema({
		id:{ type: Number, require: true, unique:true },
		titulo:{ type: String, require: true },
		fechaInicio:{ type: Date },
		horaInicio:{ type: Date},
		fechaFin:{ type: Date},
		horaFin:{ type: Date},
		diaCompleto:{ type: Boolean, require: true }
	})
  
	let EventModel = mongoose.model('Evento', EventSchema)
	module.exports = EventSchema
