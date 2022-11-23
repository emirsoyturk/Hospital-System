import Appointments from '../components/Appointments'
import '../output.css'

const DoctorAdmin = () => {
	return (
		<div class="grid grid-cols-12 gap-x-4">
			<div class="bg-slate-100 col-start-1 col-span-1 pt-8 shadow-[10px_5px_5px_-5px_rgba(0,0,0,0.2)]">
				<ul class="flex flex-col justify-between">
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1255/1255477.png" alt="" />
						<h1 class="text-xs"> Dashboard </h1>
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1250/1250620.png" alt="" />
						<h1 class="text-xs"> Appointments </h1>
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1230/1230170.png" alt="" />
						<h1 class="text-xs"> Clients </h1>
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/482/482636.png" alt="" />
						<h1 class="text-xs"> Profile </h1>
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1243/1243950.png" alt="" />
						<h1 class="text-xs"> Log out </h1>
					</li>
				</ul>
			</div>
			<div class="bg-slate-100 col-start-2 col-span-11">
				<h1 class="px-16 pt-8 text-xl font-bold text-indigo-700"> Welcome, Dr.Robert Harry </h1>
				<div class="grid grid-cols-6 px-8 py-8 gap-y-8 gap-x-12">
					<div class="flex flex-row col-start-1 col-span-2 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] h-16 px-8 py-4 justify-between">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1250/1250740.png" alt="" />
						3000 Patient Treated
					</div>
					<div class="col-start-1 col-span-4 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] h-[20rem] p-4">
						<Appointments />
					</div>
					<div class="col-start-5 col-span-2 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] h-[20rem] p-4">
						<h1 class="text-indigo-600 text-lg"> Most visited clients </h1>

						<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
							<thead>
								<tr>
									<th> Name </th>
									<th> Visited </th>
								</tr>
							</thead>
							<tbody class="">
								<tr class="">
									<td> Emir Soyturk </td>
									<td> 01/27 </td>
								</tr>
								<tr>
									<td>Emir Soyturk</td>
									<td> 01/27 </td>
								</tr>
								<tr>
									<td>Emir Soyturk</td>
									<td> 01/27 </td>
								</tr>
							</tbody>
						</table>
						<h1 class="float-right font-light text-indigo-500 hover:cursor-pointer  hover:">
							See more
						</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DoctorAdmin
