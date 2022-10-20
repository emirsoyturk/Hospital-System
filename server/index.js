const express = require('express')
const { sequelize } = require('./models')
const db = require('./models')
const { queries } = require('./queries')
const app = express()

db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		find()
	})
})

const find = async () => {
	const doctors = await sequelize.query(queries['find-all-doctors-named'] + "'%mir%'")
	console.log(doctors)
}
