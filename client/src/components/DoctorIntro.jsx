import '../output.css'
import Doctor from './Doctor'

const DoctorIntro = () => {
	return (
		<div class="flex flex-col items-center pt-12">
			<h1 class="text-3xl text-center font-semibold"> Meet our Doctors </h1>
			<h1 class="text-xl text-gray-400 text-center font-thin">
				Well qualified doctors are ready to serve you.
			</h1>
			<div class="grid grid-cols-2 gap-16 pt-10">
				<Doctor id={0}> </Doctor>
				<Doctor id={1}> </Doctor>
				<Doctor id={2}> </Doctor>
				<Doctor id={3}> </Doctor>
			</div>
		</div>
	)
}
export default DoctorIntro
