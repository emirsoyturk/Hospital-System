import '../output.css'
import {PropTypes} from 'prop-types'

const Navbar = ({userType}) => {
	console.log("NAV type: " + userType)

	return (
		<nav class="px-8 py-3 bg-[#f1f5fc]">
			<div class="container flex flex-wrap justify-between items-center mx-auto">
				<a href="/" class="flex items-center">
					{/* <img src="" class="mr-3 h-6 sm:h-9" alt="Hospital Logo" /> */}
					<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						Hospital Logo
					</span>
				</a>

				<div class="w-full block w-auto">
					<ul class="flex flex-row space-x-8 p-4 border border-gray-100">
						{ 
							userType != 'doctor' 
							&& userType != 'patient' 
							&& <a href="/SignIn" class="block py-2 pr-8 hover:bg-blue-300 hover:border-blue-300 font-semibold pl-5 text-white text-xl border rounded-2xl border-blue-700 bg-blue-700 text-white text-center border-2 rounded"> Sign In </a>
							&& <a href="/" class="block py-2 pr-4 font-semibold pl-3 text-gray-700 text-xl rounded"> Doctors </a>
							&& <a href="/" class="block py-2 pr-4 font-semibold pl-3 text-gray-700 text-xl rounded"> About us </a>
							&& <a href="/" class="block py-2 pr-4 font-semibold pl-3 text-gray-700 text-xl rounded"> Contact us </a>
							&& <div> <a href="/SignIn" class="block py-2 pr-8 hover:bg-blue-300 hover:border-blue-300 font-semibold pl-5 text-white text-xl border rounded-2xl border-blue-700 bg-blue-700 text-white text-center border-2 rounded"> Sign In </a> </div>
						}
						<a href="/" class="block py-2 pr-4 font-semibold pl-3 text-gray-700 text-xl rounded"> Home </a>

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
