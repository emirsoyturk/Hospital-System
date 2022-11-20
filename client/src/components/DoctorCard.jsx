import '../output.css'

const DoctorCard = ({ id, name, surname, unvan, brans}) => {
	return (
		<div class="rounded-3xl font-semibold pt-8 space-y-4 shadow-[3px_3px_10px_4px_rgba(0,0,0,0.3)] w-[25rem] h-[25rem] flex flex-col items-center">
			<div class="transform hover:rotate rounded-3xl bg-blue-500 w-[15rem] h-[10rem] flex flex-col items-center ">
				<img
					class="w-48 inline-block overflow-hidden object-contain h-auto"
					src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png"
					alt="doctor"
				></img>
			</div>
			<h1> {unvan}. {name} {surname} </h1>
			<h1> {brans} </h1>
			<button class="border border-xl rounded-xl text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white p-4">
				Book an Appointment
			</button>
		</div>
	)
}
export default DoctorCard
