import './App.css'
import '../src/output.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DoctorAdmin from './pages/DoctorAdmin'

const App = () => {
	return (
		<div class="flex flex-col ">
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/SignIn" element={<SignIn />} />
					<Route path="/Profile" element={<DoctorAdmin />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	)
}

export default App
