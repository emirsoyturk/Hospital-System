import Appointments from '../components/Appointments'
import RecentAppointments from '../components/RecentAppointments'
import '../output.css'
import { PropTypes } from 'prop-types'
import { useState, useEffect } from 'react'
import axios from 'axios'

const DoctorAdmin = ({token, setUserType}) => {
	const [showAppointment, setShowAppointment] = useState(false);
	const popUpAppointment = () => {
        setShowAppointment(true)
    }
    const popDownAppointment = () => { 
        setShowAppointment(false)
    }

	const AddPaper = () =>
    {
        return (
            <div class="bg-black bg-opacity-50 flex overflow-x-auto overflow-y-auto fixed top-0 right-0 left-0 right-0 z-50 p-4 w-full h-full">
				<div class="w-1/2 h-3/4 border-4 p-4 m-auto flex flex-col rounded-xl bg-indigo-300">
				<form class="w-full">
					<div class="flex flex-row -mx-3 mb-6">
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
								RaporSuresi
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="1 Hafta" />
						</div>
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
								Tur
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Hasta" />
						</div>
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
								Aciklama
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Bacagini kirmis" /> 
						</div>
						<div class="w-full px-3 mt-6">
							<button class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> Ekle </button>
						</div>
					</div>

					<div class="flex flex-row -mx-3 mb-6">
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
								Aciklama
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="1 Hafta" />
						</div>
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
								Belirtiler
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Hasta" />
						</div>
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
								Tur
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Bacagini kirmis" /> 
						</div>
						<div class="w-full px-3 mt-6">
							<button class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> Ekle </button>
						</div>
					</div>

					<div class="flex flex-row -mx-3 mb-6">
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
								TestGorseli
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://www.google.com/url?kan_tahlil_sonucu" />
						</div>
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
								Aciklama
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Hastanin kan tahlili" />
						</div>
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
								Tur
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Kan tahlili" /> 
						</div>
						<div class="w-full px-3 mt-6">
							<button class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> Ekle </button>
						</div>
					</div>	

					<div class="flex flex-row -mx-3 mb-6">
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
								IlacAdi
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Nurofen flu" />
						</div>
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
								Aciklama
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="7 gun boyunca kullanilmali" />
						</div>
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
								Tur
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="yesil" /> 
						</div>
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
								Doz
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Gunde 1" /> 
						</div>
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
								Periyot
							</label>
							<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="2 kez" /> 
						</div>
						<div class="w-full px-3 mt-6">
							<button class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> Ekle </button>
						</div>
					</div>	
				</form>


				<button onClick={popDownAppointment} class="block mb-0 mt-auto w-1/4 py-2 pr-8 hover:bg-blue-300 hover:border-blue-300 font-semibold pl-5 text-white text-xl border rounded-2xl border-blue-500 bg-blue-500 text-white text-center border-2 rounded"> Confirm </button>
                </div>
            </div>
        )
    }
	
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
			{
				showAppointment && <AddPaper />
			}
			<div class="bg-slate-100 col-start-1 col-span-1 pt-8 shadow-[10px_5px_5px_-5px_rgba(0,0,0,0.2)]">
				<ul class="flex flex-col justify-between">
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1255/1255477.png" alt="" />
						<h1 class="text-xs"> Dashboard </h1>
					</li>
					<li>
						<a href='/Appointments' class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">  
							<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1250/1250620.png" alt="" />
							<span class="text-xs"> Appointments </span>
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
						<Appointments id={token} />
					</div>
					<div class="col-start-4 col-span-3 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] h-[20rem] p-4">
						<RecentAppointments id={token} popUpAppointment={popUpAppointment}/>
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
