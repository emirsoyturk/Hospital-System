import '../output.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PatientAdmin = ({setSelectedDoctors, setUserType, token}) => {
    const [showAppointment, setShowAppointment] = useState(false);
     
    const popUpAppointment = () => {
        setShowAppointment(true)
    }
    const popDownAppointment = () => {
        setShowAppointment(false)
    }

    const Logout = () => 
	{
		setUserType(null)
		sessionStorage.removeItem('token')
		sessionStorage.removeItem('userType')
	}

    const MakeAppointment = () =>
    {
        const [selectedCity, setSelectedCity] = useState("Ankara");
        const [selectedDistrict, setSelectedDistrict] = useState("Osmangazi");
        const [selectedField, setSelectedField] = useState("Adli Tip");
        const [selectedHospital, setSelectedHospital] = useState("Bestepe Devlet Hastanesi"); 
        const [hospital, setHospital] = useState([])
        const [field, setField] = useState([]);
        const [cities, setCities] = useState([]);
        const [district, setDistrict] = useState([]);
        const navigate = useNavigate();
        
        
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(selectedCity);
            console.log(selectedDistrict);
            console.log(selectedField);
            console.log(selectedHospital);
            axios.get('http://localhost:4000/hospitals/fetch-all-doctors-by-field-and-hospital' + "?hospital='" + selectedHospital.trim() + "'&field='" + selectedField.trim() + "'")
            .then((res) =>
            {
                const doctors = res.data[0];
                console.table(doctors);
                setSelectedDoctors(doctors);
                navigate('/Doctors');
            }
            )
        }

        const fetchHospitalsByDistrictAndField = (field) => {
            setSelectedField(field);
            if(selectedDistrict.length < 3 || selectedField.length < 3)
            {
                return;
            }

            axios.get('http://localhost:4000/hospitals/fetch-all-hospital-by-field-and-district' + "?district='" + selectedDistrict.trim() + "'&field='" + selectedField.trim() + "'")
            .then((res) =>
            {
                setHospital(res.data[0])
            }
            )
        };
    
        const fetchCities = () => {
            axios.get('http://localhost:4000/hospitals/fetch-all-cities')
            .then((res) => 
            {
                setCities(res.data[0])
            })
        };

        const fetchFieldByDistrict = (district) => {
            setSelectedDistrict(district);
            if(district.length < 3)
            {
                return;
            }
            axios.get('http://localhost:4000/hospitals/fetch-all-field-by-district' + "?district='" + district.trim() + "')")
            .then((res) => 
            {
                setField(res.data[0])
                console.log(res.data[0])
            })
        }
    
        const fetchDistrictByCity = (city) => {
            setSelectedCity(city);
            if(selectedCity.length < 3)
            {
                return;
            }
            axios.get('http://localhost:4000/hospitals/fetch-all-district-by-city' + "?city='" + city.trim() + "'")
            .then((res) => 
            {
                setDistrict(res.data[0])
                console.log(res.data[0])
            })
        }

        useEffect(() => {
            fetchCities();
        }, [])
        

        return (
            <div class="bg-black bg-opacity-50 flex overflow-x-auto overflow-y-auto fixed top-0 right-0 left-0 right-0 z-50 p-4 w-full h-full">
                <div class="w-1/2 h-3/4 border-4 p-4 m-auto flex flex-col rounded-xl bg-indigo-300">
                    <button class="text-white hover:cursor-pointer font-semibold text-2xl ml-4 mt-4 bg-red-600 border-2 rounded-full flex items-center justify-center w-10 h-10" onClick={popDownAppointment}> X </button>
                    <span class="block text-3xl mx-auto mb-16 pt-16 "> Make an Appointment </span>
                    <form class="w-full flex flex-col" onSubmit={handleSubmit}>
                        <div class="flex flex-wrap">
                            <div class="w-full md:w-1/2 px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Il
                                </label>
                                <input onChange={e => fetchDistrictByCity(e.target.value)} value={selectedCity} placeholder="Ankara" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" list="cities" name="cityList" />
                                <datalist id="cities" >
                                    {
                                        cities.map((item, index) => {
                                        return <option key={index} value={item.Il}> </option>
                                    })}                                        
                                </datalist>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Ilce
                                </label>
                                <input disabled={selectedCity.length < 2} onChange={e => fetchFieldByDistrict(e.target.value) } value={selectedDistrict} placeholder="Golbasi" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" list="district" name="districtList" />
                                <datalist id="district" >
                                    {district.map((item, index) => {
                                        return <option key={index} value={item.Ilce}> </option>
                                    })}                                        
                                </datalist>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Alan
                                </label>
                                <input disabled={selectedDistrict.length < 2} onChange={e => fetchHospitalsByDistrictAndField(e.target.value)} value={selectedField} placeholder="Kulak Burun Boğaz" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" list="fields" name="fieldList" />
                                <datalist id="fields" >
                                    {field.map((item, index) => {
                                        return <option key={index} value={item.Brans}> </option>
                                    })}                                        
                                </datalist>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Hastane
                                </label>
                                <input disabled={selectedField === ""} onChange={e => setSelectedHospital(e.target.value)} value={selectedHospital} placeholder="Ankara Devlet" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" list="hospitals" name="hospitalList" />
                                <datalist id="hospitals" >
                                    {hospital.map((item, index) => {
                                        return <option key={index} value={item.HastaneAdi}> </option>
                                    })}                                        
                                </datalist>
                            </div>
                            <button class="bg-gray-200 py-2 px-12 rounded mx-auto"> Ara </button>
                        </div>
                    </form>
                </div>
            </div>
        )
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

    const PatientIncomingAppointments = () => {

		const [appointments, setAppointments] = useState([])
	
		useEffect(() => {
			axios.get('http://localhost:4000/patients/fetch-future-appointments?id=' + token)
				.then(res => {
					setAppointments(res.data[0])
                    console.table(res.data[0])
				})
				.catch(err => {
					console.log(err)
				})
		}, [])	
	
		return (
			<div class="flex flex-col min-h-full">
				<h1 class="text-indigo-600 text-lg mb-8"> Incoming appointments </h1>
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead>
						<tr >
							<th class="py-3 px-10"> Name </th>
							<th class="py-3 px-10"> Field </th>
							<th class="py-3 px-10"> Hospital </th>
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
												{appointment.unvan + " " + appointment.isim + " " + appointment.soyisim}
											</p>
										</div>
									</div>
								</td>
								<td class="py-3 px-6">
									<div class="flex items-center">
										<div class="ml-3">
											<p class="font-medium text-gray-900 dark:text-gray-100">
												{appointment.brans}
											</p>
										</div>
									</div>
								</td>
								<td class="py-3 px-6">
									<div class="flex items-center">
										<div class="ml-3">
											<p class="font-medium text-gray-900 dark:text-gray-100">
												{appointment.hastaneadi}
											</p>
										</div>
									</div>
								</td>
								<td class="py-3 px-6">
									<div class="flex items-center">
										<div class="ml-3">
											<p class="font-medium text-gray-900 dark:text-gray-100">
												{sqlDateToJsDate(appointment.tarih).toLocaleString()}
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

    const PatientRecentAppointments = () => {

		const [appointments, setAppointments] = useState([])
	
		useEffect(() => {
			axios.get('http://localhost:4000/patients/fetch-recent-appointments?id=' + token)
				.then(res => {
					setAppointments(res.data[0])
                    console.table(res.data[0])
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
							<th class="py-3 px-10"> Name </th>
							<th class="py-3 px-10"> Field </th>
							<th class="py-3 px-10"> Hospital </th>
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
												{appointment.unvan + " " + appointment.isim + " " + appointment.soyisim}
											</p>
										</div>
									</div>
								</td>
								<td class="py-3 px-6">
									<div class="flex items-center">
										<div class="ml-3">
											<p class="font-medium text-gray-900 dark:text-gray-100">
												{appointment.brans}
											</p>
										</div>
									</div>
								</td>
								<td class="py-3 px-6">
									<div class="flex items-center">
										<div class="ml-3">
											<p class="font-medium text-gray-900 dark:text-gray-100">
												{appointment.hastaneadi}
											</p>
										</div>
									</div>
								</td>
								<td class="py-3 px-6">
									<div class="flex items-center">
										<div class="ml-3">
											<p class="font-medium text-gray-900 dark:text-gray-100">
												{sqlDateToJsDate(appointment.tarih).toLocaleString()}
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

	return (
		<div class="grid grid-cols-12 gap-x-4">
			<div class="bg-slate-100 col-start-1 col-span-1 pt-8 shadow-[10px_5px_5px_-5px_rgba(0,0,0,0.2)]">
				<ul class="flex flex-col justify-between">
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1255/1255477.png" alt="" />
						<h1 class="text-xs"> Dashboard </h1>
					</li>
					<li class="">
                        <a class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer" href="/Appointments">
                            <img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1250/1250620.png" alt="" />
                            <h1 class="text-xs"> Appointments </h1>
                        </a>
						
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1230/1230170.png" alt="" />
						<h1 class="text-xs"> Doctors </h1>
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
				<h1 class="px-16 pt-8 text-xl font-bold text-indigo-700"> Welcome, Emir Soyturk </h1>
				<div class="grid grid-cols-6 px-8 py-8 gap-y-8 gap-x-12">
                    <div class="col-start-1 col-span-3 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] p-4 w-full">
						<PatientRecentAppointments />
					</div>
                    <div class="col-start-4 col-span-3 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] p-4 w-full">
						<PatientIncomingAppointments />
					</div>
                    <div class="flex flex-col items-center col-start-1 col-span-3 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] h-[30rem] w-full p-4">
                        <button class="hover:bg-indigo-400 hover:text-white hover:cursor-pointer border border-4 border-indigo-400 rounded-2xl p-2 mt-8 text-3xl text-indigo-600" onClick={popUpAppointment}> Make an appointment </button>
                        <div class="mt-8 bg-blue-100 flex flex-col items-center w-3/4 h-1/2 space-y-2 rounded-2xl">
                            <span class="m-4 "> Last appointment </span>
                            <span class="text-2xl mx-auto "> Ankara Devlet </span>
                            <span class="text-2xl mx-auto "> Prof. Berfin Ozcubuk</span>
                            <span class="text-2xl mx-auto "> Estetik </span>
                            {
                                showAppointment ? <MakeAppointment /> : null
                            }
                        </div>
                        
                    </div>
                    
					
                    
				</div>
			</div>
		</div>
	)
}

export default PatientAdmin
