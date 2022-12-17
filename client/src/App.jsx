import './App.css'
import '../src/output.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import SignIn from './components/Login/SignIn'
import Hospital from './pages/Hospital'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DoctorAdmin from './pages/DoctorAdmin'
import PatientAdmin from './pages/PatientAdmin'
import { useState, useEffect } from 'react'
import Appointments from './pages/Appointments'

const App = () => {
	const [userType, setUserType] = useState('');
	const [token, setToken] = useState(null);

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
			<div class="flex flex-col justify-center">
			<Navbar token={null}/>
			<main class="mb-auto">
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/SignIn" element={<SignIn setToken={setToken} setUserType={setUserType}/>} />
						<Route path="/Hospital/:id" element={<Hospital />} />
					</Routes>

				</Router>
			</main>
			<Footer />
		</div>
		)
	}
	else
	{
		return (
			<div class="flex flex-col h-screen justify-between">
				<Navbar userType={userType}/>
				<main class="mb-auto">
					<Router>
						<Routes>
							{ 
								userType === 'doctor' && <Route path="/Appointments" element={<Appointments id={token}/>} />
							}
							{
								userType === 'doctor' && <Route path="/" element={<DoctorAdmin token={token} setUserType={setUserType}/>} /> 
							}
							{
								userType === 'patient' && <Route path="/" element={<PatientAdmin token={token} setUserType={setUserType}/>} />
							}

						</Routes>
					</Router>
				</main>
				<footer class="">
					<Footer />
				</footer>
			</div>
		)
	}
}

export default App
