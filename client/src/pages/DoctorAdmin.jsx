import Appointments from '../components/Appointments'
import RecentAppointments from '../components/RecentAppointments'
import '../output.css'
import { PropTypes } from 'prop-types'
import { useState, useEffect } from 'react'
import axios from 'axios'

const DoctorAdmin = ({token, setUserType}) => {
	
	const Logout = () => 
	{
		setUserType(null)
		token = null
		sessionStorage.removeItem('token')
		sessionStorage.removeItem('userType')
	}

	const [doctorName, setDoctorName] = useState([]);
	
	useEffect(() => {
		axios.get('http://localhost:4000/doctors/fetchDoctorNameWithID?id=' + token)
		.then((res) =>
		{
			setDoctorName(res.data[0][0])
		})

	}, []);


	return (
		<div class="grid grid-cols-12 gap-x-4">
			<div class="bg-slate-100 col-start-1 col-span-1 pt-8 shadow-[10px_5px_5px_-5px_rgba(0,0,0,0.2)]">
				<ul class="flex flex-col justify-between">
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1255/1255477.png" alt="" />
						<h1 class="text-xs"> Dashboard </h1>
					</li>
					<li>
						<a href='/Appointments' class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">  
							<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1250/1250620.png" alt="" />
							<a href='/Appointments' class="text-xs"> Appointments </a>
						</a>
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1230/1230170.png" alt="" />
						<h1 class="text-xs"> Clients </h1>
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/482/482636.png" alt="" />
						<h1 class="text-xs"> Profile </h1>
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer" onClick={Logout}>
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1243/1243950.png" alt="" />
						<h1 class="text-xs"> Log out </h1>
					</li>
				</ul>
			</div>
			<div class="bg-slate-100 col-start-2 col-span-11">
				<h1 class="px-16 pt-8 text-xl font-bold text-indigo-700"> Welcome, {doctorName.Isim + " " + doctorName.Soyisim} </h1>
				<div class="grid grid-cols-6 px-8 py-8 gap-y-8 gap-x-12">
					<div class="flex flex-row col-start-1 col-span-2 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] h-16 px-8 py-4 justify-between">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1250/1250740.png" alt="" />
						3000 Patient Treated
					</div>
					<div class="col-start-1 col-span-3 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] h-[20rem] p-4">
						<Appointments id={token}/>
					</div>
					<div class="col-start-4 col-span-3 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] h-[20rem] p-4">
						<RecentAppointments id={token}/>
					</div>
				</div>
			</div>
		</div>
	)
}

DoctorAdmin.propTypes = {
	setUserType: PropTypes.func.isRequired
}

export default DoctorAdmin
