import '../output.css'
import {PropTypes} from 'prop-types'
import logo from '../images/logo.png';


const Navbar = ({userType}) => {
	return (
		<nav class="px-8 py-3 bg-[#f1f5fc]">
			<div class="container flex flex-wrap justify-between items-center mx-auto">
				<a href="/" class="flex items-center">
					<img class="h-[5rem] " alt="Hospital Logo" src={logo}/>
				</a>

				<div class="w-full block w-auto">
					<ul class="flex flex-row space-x-8 p-4 border border-gray-100">
						
						<a href="/" class="block py-2 pr-4 font-semibold pl-3 text-gray-700 text-xl rounded-2xl hover:scale-125"> Home </a>
						
						{
							userType !== 'doctor' && userType !== 'patient' && <a href="/SignIn" class="block py-2 pr-8 hover:bg-blue-300 hover:border-blue-300 font-semibold pl-5 text-white text-xl border rounded-2xl border-blue-700 bg-blue-700 text-white text-center border-2 rounded"> Sign In </a> 
						}
						{
							userType !== 'doctor' && userType !== 'patient' && <a href="/SignUp" class="block py-2 pr-8 hover:bg-blue-300 hover:border-blue-300 font-semibold pl-5 text-white text-xl border rounded-2xl border-blue-700 bg-blue-700 text-white text-center border-2 rounded"> Sign Up </a> 
						}

					</ul>
				</div>
			</div>
		</nav>
	)
}

Navbar.propTypes = {
	userType: PropTypes.string
}

export default Navbar
