import './App.css'
import '../src/output.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import SignIn from './components/Login/SignIn'
import SignUp from './components/Login/SignUp'
import Hospital from './pages/Hospital'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DoctorAdmin from './pages/DoctorAdmin'
import PatientAdmin from './pages/PatientAdmin'
import { useState } from 'react'

const App = () => {
	const [token, setToken] = useState()

	return (
		<div class="flex flex-col h-screen justify-center">
			<Navbar />
			<main class="mb-auto">
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/SignIn" element={<SignIn />} />
						<Route path="/SignUp" element={<SignUp />} />
						<Route path="/DoctorPage" element={<DoctorAdmin />} />
						<Route path="/Profile" element={<PatientAdmin />} />
						<Route path="/Hospital/:id" element={<Hospital />} />
					</Routes>
				</Router>
			</main>
			<Footer />
		</div>
	)
}

export default App
