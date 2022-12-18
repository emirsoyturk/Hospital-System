import '../output.css'

const Footer = () => {
	return (
		<footer class="px-4 bg-gray-200 py-6 rounded-lg flex items-center justify-between dark:bg-gray-800">
			<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2022 Sic est Scriptum™ . All Rights Reserved.
			</span>
			<ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
				<li>
					<a href="/" class="mr-4 hover:underline md:mr-6 ">
						About
					</a>
				</li>
				<li>
					<a href="/" class="mr-4 hover:underline md:mr-6">
						Privacy Policy
					</a>
				</li>
				<li>
					<a href="/" class="mr-4 hover:underline md:mr-6">
						Licensing
					</a>
				</li>
				<li>
					<a href="/" class="hover:underline">
						Contact
					</a>
				</li>
			</ul>
		</footer>
	)
}
export default Footer
