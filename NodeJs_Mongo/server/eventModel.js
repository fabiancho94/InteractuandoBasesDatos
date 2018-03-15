const mongoose = require('mongoose')
	const Schema = mongoose.Schema

	let EventSchema = new Schema({
		title:{ type: String, require: true },
		start:{ type: Date },
		start_hour:{ type: Date},
		end:{ type: Date},
		end_hour:{ type: Date}
	})

	let EventModel = mongoose.model('Event', EventSchema)
	module.exports = EventModel
