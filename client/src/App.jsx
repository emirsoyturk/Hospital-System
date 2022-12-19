import './App.css'
import '../src/output.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import SignIn from './components/Login/SignIn'
import SignUp from './components/Login/SignUp'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DoctorAdmin from './pages/DoctorAdmin'
import PatientAdmin from './pages/PatientAdmin'
import { useState, useEffect } from 'react'
import Calendar from './pages/Calendar'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'
import Clients from './pages/Clients'
import DoctorProfile from './pages/DoctorProfile'
import PatientProfile from './pages/PatientProfile'


const App = () => {
	const [userType, setUserType] = useState('');
	const [token, setToken] = useState(null);
	const [selectedDoctors, setSelectedDoctors] = useState([]);

	useEffect(() => {
		const token = sessionStorage.getItem('token');
		const userType = sessionStorage.getItem('userType');
		console.log("Token: " + token);
		console.log("User type: " + userType);
		if(token && userType)
		{
			console.log("Setting token and user type");
			setToken(token);
			setUserType(userType);
		}
		else
		{
			console.log("Token and user type not set");
		}
	}, []);


	if(userType !== 'doctor' && userType !== 'patient')
	{
		return (
			<div class="flex flex-col min-h-screen">
			<Navbar token={null}/>
			<main>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/SignIn" element={<SignIn setToken={setToken} setUserType={setUserType}/>} />
						<Route path="/SignUp" element={<SignUp setToken={setToken} setUserType={setUserType}/>} />

					</Routes>

				</Router>
			</main>
			<footer class="mt-auto mb-0">
				<Footer />
			</footer>
		</div>
		)
	}
	else
	{
		return (
			<div class="flex flex-col min-h-screen">
				<Navbar userType={userType}/>
				<main>
					<Router>
						<Routes>
							{ 
								userType === 'doctor' && <Route path="/Calendar" element={<Calendar id={token} setUserType={setUserType}/>} />
							}
							{
								userType === 'doctor' && <Route path="/" element={<DoctorAdmin token={token} setUserType={setUserType}/>} /> 
							}
							{
								userType === 'doctor' && <Route path="/Clients" element={<Clients id={token} setUserType={setUserType}/>} /> 
							}
							{
								userType === 'patient' && <Route path="/" element={<PatientAdmin token={token} setUserType={setUserType} setSelectedDoctors={setSelectedDoctors}/>} />
							}
							{
								userType === 'patient' && <Route path="/Doctors" element={<Doctors id={token} setUserType={setUserType} selectedDoctors={selectedDoctors}/>} />
							}
							{
								userType === 'patient' && <Route path="/Appointments" element={<Appointments id={token} setUserType={setUserType}/>} />
							}
							{
								userType === 'doctor' && <Route path="/Profile" element={<DoctorProfile id={token}/>} />
							}
							{
								userType === 'patient' && <Route path="/Profile" element={<PatientProfile id={token}/>} />
							}

						</Routes>
					</Router>
				</main>
				<footer class="mt-auto mb-0">
					<Footer />
				</footer>
			</div>
		)
	}
}

export default App
