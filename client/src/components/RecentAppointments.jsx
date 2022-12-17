import { useState, useEffect } from 'react'
import axios from 'axios'



const Appointments = ({id}) => {

	const [appointments, setAppointments] = useState([])

	useEffect(() => {
		axios.get('http://localhost:4000/doctors/recentAppointments?id=' + id)
			.then(res => {
				setAppointments(res.data[0])
			})
			.catch(err => {
				console.log(err)
			})
	}, [])	

	console.log(appointments)

	return (
		<div>
			<h1 class="text-indigo-600 text-lg mb-8"> Recent appointments </h1>
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead>
					<tr >
						<th class="py-3 px-10"> TC </th>
						<th class="py-3 px-10"> Name </th>
						<th class="py-3 px-10"> Disease </th>
						<th class="py-3 px-10"> Date </th>
					</tr>
				</thead>
				<tbody class="">
					{appointments.map(appointment => (
						<tr class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-300 hover:cursor-pointer dark:hover:bg-gray-800">
							<td class="py-3 px-6">
								<div class="flex items-center">
									<div class="ml-3">
										<p class="font-medium text-gray-900 dark:text-gray-100">
											{appointment.TCKimlikNo}
										</p>
									</div>
								</div>
							</td>
							<td class="py-3 px-6">
								<div class="flex items-center">
									<div class="ml-3">
										<p class="font-medium text-gray-900 dark:text-gray-100">
											{appointment.Isim + " " + appointment.Soyisim}
										</p>
									</div>
								</div>
							</td>
							<td class="py-3 px-6">
								<div class="flex items-center">
									<div class="ml-3">
										<p class="font-medium text-gray-900 dark:text-gray-100">
											{appointment.RandevuTuru}
										</p>
									</div>
								</div>
							</td>
							<td class="py-3 px-6">
								<div class="flex items-center">
									<div class="ml-3">
										<p class="font-medium text-gray-900 dark:text-gray-100">
											{appointment.Tarih}
										</p>
									</div>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div class="flow-root">
				<h1 class="float-right font-light text-indigo-500 hover:cursor-pointer  hover:">
					See more
				</h1>
			</div>
		</div>
	)
}

export default Appointments
