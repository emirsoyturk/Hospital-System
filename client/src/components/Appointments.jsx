const Appointments = () => {
	return (
		<div>
			<h1 class="text-indigo-600 text-lg"> Appointment requests </h1>
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead>
					<tr>
						<th> Name </th>
						<th> Disease </th>
						<th> Date </th>
						<th> Approval </th>
					</tr>
				</thead>
				<tbody class="">
					<tr class="">
						<td> Emir Soyturk </td>
						<td> Disease </td>
						<td> 01/27 </td>
						<td> Yes </td>
					</tr>
					<tr>
						<td>Emir Soyturk</td>
						<td> Disease </td>
						<td> 01/27 </td>
						<td> Yes </td>
					</tr>
					<tr>
						<td>Emir Soyturk</td>
						<td> Disease </td>
						<td> 01/27 </td>
						<td> Yes </td>
					</tr>
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
