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

	app.get("/login", async (req, res) => {
		let userName = req.query.userName
		let password = req.query.password
		if(userName == password)
		{
			const doctors = await sequelize.query(queries['find-doctor-by-id'] + userName)
			const patients = await sequelize.query(queries['find-patient-by-id'] + userName)
			if(doctors[0].length == 1 || patients[0].length == 1)
			{
				res.send({"username": userName, "userType": doctors[0].length == 1 ? "doctor" : "patient"})
			}
			else
			{
				res.send(null)
			}
		}
		else
		{
			res.send(null)
		}
	})

})