import '../output.css'

const HospitalCard = ({ id, name, city, phoneNumber}) => {
	return (
		<div class="rounded-3xl font-semibold pt-8 space-y-4 shadow-[3px_3px_10px_4px_rgba(0,0,0,0.3)] w-[25rem] h-[25rem] flex flex-col items-center">
			<div class="transform hover:rotate rounded-3xl w-[25rem] h-[10rem] flex flex-col items-center ">
				<img
					class="w-48 inline-block overflow-hidden object-cover h-full w-full h-auto"
					src="https://iadsb.tmgrup.com.tr/9ace4a/0/0/0/0/1000/563?u=https://idsb.tmgrup.com.tr/2019/02/13/1550082551040.jpg"
					alt="doctor"
				></img>
			</div>
			<h1> {name} </h1>
			<h1> {city} </h1>
			<h1> {phoneNumber} </h1>
			<a href={"/Hospital/:" + name} class="border border-xl rounded-xl text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white p-4">
				Book an Appointment
			</a>
		</div>
	)
}
export default HospitalCard
