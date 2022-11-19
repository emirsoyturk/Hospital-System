import '../output.css'

const Services = () => {
	return (
		<div class="flex flex-col items-center">
			<h1 class="text-3xl text-center font-semibold"> Our Medical Services </h1>
			<h1 class="text-xl text-gray-400 text-center font-thin w-60">
				{' '}
				We are dedicated to serve you best medical services{' '}
			</h1>

			<div class="flex space-x-10 pt-10">
				<div class="rounded-3xl font-semibold space-y-8 pt-8 shadow-[3px_3px_10px_4px_rgba(0,0,0,0.3)] w-[12rem] h-[12rem] flex flex-col items-center">
					<img
						class="w-20 h-20"
						src="https://cdn-icons-png.flaticon.com/512/1250/1250720.png"
						alt="Lab icon"
					></img>
					<h1> Well equipped lab </h1>
				</div>
				<div class="rounded-3xl font-semibold space-y-8 pt-8 shadow-[3px_3px_10px_4px_rgba(0,0,0,0.3)] w-[12rem] h-[12rem] flex flex-col items-center">
					<img
						class="w-20 h-20"
						src="https://cdn-icons-png.flaticon.com/512/1254/1254770.png"
						alt="Emergency Ambulance"
					></img>
					<h1> Emergency Ambulance </h1>
				</div>
				<div class="rounded-3xl font-semibold space-y-8 pt-8 shadow-[3px_3px_10px_4px_rgba(0,0,0,0.3)] w-[12rem] h-[12rem] flex flex-col items-center">
					<img
						class="w-20 h-20"
						src="https://cdn-icons-png.flaticon.com/512/1250/1250620.png"
						alt="Online Appointment"
					></img>
					<h1> Online Appointment </h1>
				</div>
				<div class="rounded-3xl font-semibold space-y-8 pt-8 shadow-[3px_3px_10px_4px_rgba(0,0,0,0.3)] w-[12rem] h-[12rem] flex flex-col items-center">
					<img
						class="w-20 h-20"
						src="https://cdn-icons-png.flaticon.com/512/1167/1167061.png"
						alt="Call Center"
					></img>
					<h1> Call Center </h1>
				</div>
			</div>
		</div>
	)
}
export default Services
