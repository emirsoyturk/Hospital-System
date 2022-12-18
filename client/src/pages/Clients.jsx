import { PropTypes } from 'prop-types'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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


const Clients = ({id, setUserType}) => {

    const [appointments, setAppointments] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:4000/doctors/appointments?id=' + id)
            .then(res => {
                setAppointments(res.data[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])	

    const Logout = () => 
	{
		setUserType(null)
		sessionStorage.removeItem('token')
		sessionStorage.removeItem('userType')
        navigate('/')   
        
	}

    return (
        <div class="flex flex-row min-h-full">
            <div class="bg-slate-100 col-start-1 ml-8 pr-8 col-span-1 pt-8 shadow-[10px_5px_5px_-5px_rgba(0,0,0,0.2)]">
				<ul class="flex flex-col justify-between">
					<li class="">
                        <a class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer" href='/'>
                            <img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1255/1255477.png" alt="" />
                            <h1 class="text-xs"> Dashboard </h1>
                        </a>
					</li>
					<li>
						<a href='/Calendar' class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">  
							<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1250/1250620.png" alt="" />
							<span class="text-xs"> Appointments </span>
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
            <div class="pl-16 w-full">
            <h1 class="text-indigo-600 text-3xl mb-8"> All appointments </h1>
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
                <h1 class="float-right font-light text-indigo-500 hover:cursor-pointer">
                    See more
                </h1>
            </div>
            </div>
            
        </div>
    )
}

export default Clients