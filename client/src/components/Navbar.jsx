import '../output.css'

const Navbar = () => {
	return (
		<nav class="px-2 py-3">
			<div class="container flex flex-wrap justify-between items-center mx-auto">
				<a href="google.com" class="flex items-center">
					{/* <img src="" class="mr-3 h-6 sm:h-9" alt="Hospital Logo" /> */}
					<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						Hospital Logo
					</span>
				</a>

				<div class="w-full block w-auto">
					<ul class="flex flex-row space-x-8 p-4 border border-gray-100">
						<li class="block py-2 pr-4 font-semibold pl-3 text-gray-700 text-xl rounded"> Home </li>
						<li class="block py-2 pr-4 font-semibold pl-3 text-gray-700 text-xl rounded">
							Services
						</li>
						<li class="block py-2 pr-4 font-semibold pl-3 text-gray-700 text-xl rounded">
							{' '}
							Doctors{' '}
						</li>
						<li class="block py-2 pr-4 font-semibold pl-3 text-gray-700 text-xl rounded">
							{' '}
							About us{' '}
						</li>
						<li class="block py-2 pr-4 font-semibold pl-3 text-gray-700 text-xl rounded">
							{' '}
							Contact us{' '}
						</li>
						<li class="block py-2 pr-8 font-semibold pl-5 text-white text-xl border rounded-2xl border-blue-700 bg-blue-700 text-white text-center border-2 rounded">
							Sign in
						</li>
						<li class="block py-2 pr-8 font-semibold pl-5 text-blue-700 text-xl border rounded-2xl border-blue-700 hover:bg-blue-700 hover:text-white text-center border-2 rounded">
							Sign up
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Navbar
