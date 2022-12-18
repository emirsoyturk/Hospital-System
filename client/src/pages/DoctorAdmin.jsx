import '../output.css'
import { PropTypes } from 'prop-types'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import toast, { Toaster } from 'react-hot-toast';


const DoctorAdmin = ({token, setUserType}) => {
	const [showAppointment, setShowAppointment] = useState(false);
	const [selectedPatient, setSelectedPatient] = useState(null);

	const popUpAppointment = (patientId) => {
		setSelectedPatient(patientId);
        setShowAppointment(true)
    }
    const popDownAppointment = () => { 
        setShowAppointment(false)
    }

	const notify = (sentence) => toast.custom((t) => (
		<div
		  className={`${
			t.visible ? 'animate-enter' : 'animate-leave'
		  } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
		>
		  <div className="flex-1 w-0 p-4">
			<div className="flex items-start">
			  <div className="ml-3 flex-1">
				<p className="text-sm font-medium text-gray-900">
				  {selectedPatient.Isim + " " + selectedPatient.Soyisim}
				</p>
				<p className="mt-1 text-sm text-gray-500">
				  {sentence}
				</p>
			  </div>
			</div>
		  </div>
		  <div className="flex border-l border-gray-200">
			<button
			  onClick={() => toast.dismiss(t.id)}
			  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
			>
			  Close
			</button>
		  </div>
		</div>
	  ));


	const random8Digit = () => {
		return Math.floor(10000000 + Math.random() * 90000000);
	}

	const sqlDateToJsDate = (sqlDate) => {
		var sqlDateArr1 = sqlDate.split("-");
		var sYear = sqlDateArr1[0];
		var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
		var other = sqlDateArr1[2].split("T");
		var sDay = other[0];
		var sqlDateArr2 = other[1].split(":");
		var sHour = sqlDateArr2[0];
		var sMinute = sqlDateArr2[1];
		var sSecond = sqlDateArr2[2].split(".")[0];
		var jsDate = new Date(sYear,sMonth,sDay,sHour,sMinute,sSecond);
		
		return jsDate;
	}

	const AddPaper = () =>
    {
		const [medicines, setMedicines] = useState([]);
		const [selectedMedicineDosage, setSelectedMedicineDosage] = useState(null);
		const [selectedMedicinePeriod, setSelectedMedicinePeriod] = useState(null);
		const [selectedMedicineDescription, setSelectedMedicineDescription] = useState(null);
		const [selectedMedicineType, setSelectedMedicineType] = useState(null);
		const [selectedMedicineName, setSelectedMedicineName] = useState(null);

		const [selectedAnalysisImage, setSelectedAnalysisImage] = useState(null);
		const [selectedAnalysisDescription, setSelectedAnalysisDescription] = useState(null);
		const [selectedAnalysisType, setSelectedAnalysisType] = useState(null);

		const [selectedDiseaseDescription, setSelectedDiseaseDescription] = useState(null);
		const [selectedDiseaseSymptoms, setSelectedDiseaseSymptoms] = useState(null);
		const [selectedDiseaseType, setSelectedDiseaseType] = useState(null);

		const [selectedReportDescription, setSelectedReportDescription] = useState(null);
		const [selectedReportType, setSelectedReportType] = useState(null);
		const [selectedReportTime, setSelectedReportTime] = useState(null);


		const fetchMedicines = () => {
			axios.get('http://localhost:4000/patients/fetch-all-medicines')
			.then((res) =>
			{
				setMedicines(res.data[0])
			})
		};

		const AddPrescriptions = () =>
		{
			notify("Ilac Eklendi")
			axios.post('http://localhost:4000/patients/add-medicine', {
				'detayNo': random8Digit(),
				'randevuNo': selectedPatient.RandevuNo,
				'IlacAdi': selectedMedicineName,
				'Aciklama': selectedMedicineDescription,
				'Tur': selectedMedicineType,
				'Doz': selectedMedicineDosage,
				'Periyot': selectedMedicinePeriod,
			})
			.then((res) =>
			{
			}
			)
		}

		const AddReport = () =>
		{
			notify("Rapor Eklendi")
			axios.post('http://localhost:4000/patients/add-report', {
				'detayNo': random8Digit(),
				'randevuNo': selectedPatient.RandevuNo,
				'Aciklama': selectedReportDescription,
				'Tur': selectedReportType,
				'Tarih': selectedReportTime,
			})
			.then((res) =>
			{
			}
			)
		}

		const AddDisease = () =>
		{
			notify("Hastalik Eklendi")
			axios.post('http://localhost:4000/patients/add-disease', {
				'detayNo': random8Digit(),
				'randevuNo': selectedPatient.RandevuNo,
				'Aciklama': selectedDiseaseDescription,
				'Tur': selectedDiseaseType,
				'Semptom': selectedDiseaseSymptoms,
			})
			.then((res) =>
			{
			}
			)
		}

		const AddAnalysis = () =>
		{
			notify("Analiz Eklendi")
			axios.post('http://localhost:4000/patients/add-analysis', {
				'detayNo': random8Digit(),
				'randevuNo': selectedPatient.RandevuNo,
				'Aciklama': selectedAnalysisDescription,
				'Tur': selectedAnalysisType,
				'Gorsel': selectedAnalysisImage,
			})
			.then((res) =>
			{
			}
			)
		}


		useEffect(() => {
			fetchMedicines()
		}, []);
		if(medicines == null)
		{
			return;
		}

        return (
            <div class="bg-black bg-opacity-50 flex overflow-x-auto overflow-y-auto fixed top-0 right-0 left-0 right-0 z-50 p-4 w-full h-full">
				<div class="w-1/2 h-3/4 border-4 p-4 m-auto flex flex-col rounded-xl bg-indigo-300">
					<span class="text-xl text-center mb-4"> {selectedPatient.Isim + " " + selectedPatient.Soyisim} </span>
					<form class="w-full">
						<div class="flex flex-row -mx-3 mb-6">
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ">
                                    İlaç
                                </label>
                                <input onChange={e => setSelectedMedicineName(e.target.value)} placeholder="Parol" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" list="medicines" name="medicinesList" />
                                <datalist id="medicines" >
                                    {medicines.map((item, index) => {
                                        return <option key={index} value={item.IlacAdi}> </option>
                                    })}                                        
                                </datalist>
							</div>
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
									Aciklama
								</label>
								<input onChange={e => setSelectedMedicineDescription(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Yuze Surulecek" />
							</div>
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
									Tur
								</label>
								<input onChange={e => setSelectedMedicineType(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Kirmizi" /> 
							</div>
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
									Doz
								</label>
								<input onChange={e => setSelectedMedicineDosage(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Gunde 3" /> 
							</div>
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
									Periyot
								</label>
								<input onChange={e => setSelectedMedicinePeriod(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="4 Kez" /> 
							</div>
							<div class="w-full px-3 mt-6">
								<button onClick={AddPrescriptions} type="button" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> Ekle </button>
							</div>
						</div>	
						<div class="flex flex-row -mx-3 mb-6">
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
									RaporSuresi
								</label>
								<input onChange={e => setSelectedReportTime(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="72" />
							</div>
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
									Aciklama
								</label>
								<input onChange={e => setSelectedReportDescription(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Rapor verildi." /> 
							</div>
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
									Tur
								</label>
								<input onChange={e => setSelectedReportType(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ilac raporu" />
							</div>
							<div class="w-full px-3 mt-6">
								<button onClick={AddReport} type="button" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> Ekle </button>
							</div>
						</div>

						<div class="flex flex-row -mx-3 mb-6">
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
									Aciklama
								</label>
								<input onChange={e => setSelectedDiseaseDescription(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Diyabet" />
							</div>
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
									Belirtiler
								</label>
								<input onChange={e => setSelectedDiseaseSymptoms(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Bas Agrisi" />
							</div>
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
									Tur
								</label>
								<input onChange={e => setSelectedDiseaseType(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Cilt Hastaligi" /> 
							</div>
							<div class="w-full px-3 mt-6">
								<button onClick={AddDisease} type="button" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> Ekle </button>
							</div>
						</div>

						<div class="flex flex-row -mx-3 mb-6">
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
									TestGorseli
								</label>
								<input onChange={e => setSelectedAnalysisImage(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://www.google.com/url?kan_tahlil_sonucu" />
							</div>
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
									Aciklama
								</label>
								<input onChange={e => setSelectedAnalysisDescription(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Tahlil sonucunda gerekli recete verilmistir." />
							</div>
							<div class="w-full px-3">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
									Tur
								</label>
								<input onChange={e => setSelectedAnalysisType(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Mikroskopi Tahlili" /> 
							</div>
							<div class="w-full px-3 mt-6">
								<button onClick={AddAnalysis} type="button" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> Ekle </button>
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

	const RecentAppointments = ({id}) => {

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
	
		return (
			<div class="flex flex-col min-h-full">
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
						{appointments.map((appointment, i) => (
							i < 10 &&
							<tr key={i} class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-300 hover:cursor-pointer dark:hover:bg-gray-800" onClick={() => popUpAppointment(appointment)}>
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
												{sqlDateToJsDate(appointment.Tarih).toLocaleString()}
											</p>
										</div>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div class="mb-0 mt-auto">
					<a href="/Clients" class="float-right font-light text-indigo-500 hover:cursor-pointer">
						See more
					</a>
				</div>
			</div>
		)
	}

	const FutureAppointments = ({id}) => {

		const [appointments, setAppointments] = useState([])
	
		useEffect(() => {
			axios.get('http://localhost:4000/doctors/futureAppointments?id=' + id)
				.then(res => {
					setAppointments(res.data[0])
				})
				.catch(err => {
					console.log(err)
				})
		}, [])	
	
		return (
			<div class="flex flex-col min-h-full">
				<h1 class="text-indigo-600 text-lg mb-8"> Appointment requests </h1>
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
						{appointments.map((appointment, i) => (
							i < 10 &&
							<tr key={i} class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-300 hover:cursor-pointer dark:hover:bg-gray-800">
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
												{sqlDateToJsDate(appointment.Tarih).toLocaleString()}
											</p>
										</div>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div class="mt-auto mb-0">
					<a href="/Clients" class="float-right font-light text-indigo-500 hover:cursor-pointer">
						See more
					</a>
				</div>
			</div>
		)
	}

	const [doctorName, setDoctorName] = useState([]);
	const [totalPatients, setTotalPatients] = useState(0);

	useEffect(() => {

		axios.get('http://localhost:4000/doctors/fetchDoctorNameWithID?id=' + token)
		.then((res) =>
		{
			setDoctorName(res.data[0][0])
		})

		axios.get('http://localhost:4000/doctors/count?id=' + token)
		.then((res) =>
		{
			setTotalPatients(res.data[0][0].total)
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
						<a href='/Calendar' class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">  
							<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1250/1250620.png" alt="" />
							<span class="text-xs"> Calendar </span>
						</a>
					</li>
					<li>
						<a href='/Clients' class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
							<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1230/1230170.png" alt="" />
							<h1 class="text-xs"> Clients </h1>
						</a>
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
						{totalPatients} Patient Treated
					</div>
					<div class="col-start-1 col-span-3 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] max-h-[100rem] p-4">
						<FutureAppointments id={token} />
					</div>
					<div class="col-start-4 col-span-3 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] max-h-[100rem] p-4">
						<RecentAppointments id={token} />
					</div>
				</div>
			</div>
			<Toaster />
		</div>
	)
}

DoctorAdmin.propTypes = {
	setUserType: PropTypes.func.isRequired
}

export default DoctorAdmin
