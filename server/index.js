const express = require('express')
const { sequelize } = require('./models')
const db = require('./models')
const { queries } = require('./queries')
const doctorRoute = require('./routers/doctor.route')
const hospitalRoute = require('./routers/hospital.route')

const cors = require('cors');

const app = express()
// const odbc = require('odbc');

// async function connectToDatabase() {
//     const connection1 = await odbc.connect('DSN=MYDSN');
//     // connection1 is now an open Connection

//     // or using a configuration object
//     const connectionConfig = {
//         connectionString: 'DSN=MYDSN',
//         connectionTimeout: 10,
//         loginTimeout: 10,
//     }
//     const connection2 = await odbc.connect(connectionConfig);
//     // connection2 is now an open Connection
// }

// connectToDatabase();


//Routers
//const doctorRouter = require('./routers/Doctor')

//app.use("/doctors", doctorRouter);
app.use(cors())
app.use('/doctors', doctorRoute)
app.use('/hospitals', hospitalRoute)

db.sequelize.sync().then(() => {
	app.listen(4000, () => {
		console.log('Connected to port 4000')
	})
})

app.get("/", (req, res) => {
	res.send("Deneme")
})

const find = async () => {
	const doctors = await sequelize.query(queries['find-all-doctors'])
	console.log(doctors)
}
