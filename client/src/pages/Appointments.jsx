import '../output.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const date = new Date();

let currentDay = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();



const Day = ({ day, month, year, appointments }) => {
    return (
        day != currentDay || month != date.getMonth() || year != date.getFullYear() ? (
        <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
            <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full mb-4 ">
                    <span class="text-gray-500 text-sm"> {day} </span>
                </div>
                {
                    appointments.map((appointment, i) => {
                        if(appointment.Tarih == year + "-" + (month + 1) + "-" + day) {
                            return (
                                <div class="event bg-red-400 text-white rounded p-1 text-sm mb-1">
                                    <span class="event-name text-white"> {appointment.Isim + " " + appointment.Soyisim} </span>
                                    <span class="time text-white"> 12:00~14:00 </span>
                            </div>
                            )
                        }
                    })
                    
                }
            </div>  
        </td>
        ) : (
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 border-4 border-black w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
            <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full mb-4 ">
                    <span class="text-gray-500 text-sm"> {day} </span>
                </div>

                {
                    appointments.map((appointment, i) => {
                        if(appointment.Tarih == year + "-" + (month + 1) + "-" + day) {
                            return (
                                <div class="event bg-red-400 text-white rounded p-1 text-sm mb-1">
                                    <span class="event-name text-white"> {appointment.Isim + " " + appointment.Soyisim} </span>
                                    <span class="time text-white"> 12:00~14:00 </span>
                            </div>
                            )
                        }
                    })
                }
            </div>  
        </td>
        )
    )
}

const Appointments = ({id}) => {

    const [appointment, setAppointment] = useState([])

    useEffect(() => {
		axios.get('http://localhost:4000/doctors/futureAppointments?id=' + id)
			.then(res => {
				setAppointment(res.data[0])
                console.log(res.data[0])
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

    if(appointment.length === 0) {
        return (
            <div class="container mx-auto mt-10">
                <div class="m-16 text-3xl flex justify-center"> 
                    <h1> No Appointment has found </h1>
                </div>
                <div class="wrapper bg-white rounded shadow w-full ">
                <div class="header flex justify-between border-b p-2">
                    <span class="text-lg font-bold">
                    {year} {monthNames[month]} {currentDay}
                    </span>
                </div>
                
                </div>
            </div>
        )
    }

	return (
		<div class="container mx-auto mt-10">
            <div class="wrapper bg-white rounded shadow w-full ">
            <div class="header flex justify-between border-b p-2">
                <span class="text-lg font-bold">
                {year} {monthNames[month]} {currentDay}
                </span>
            </div>
            <table class="w-full">
                <thead>
                <tr>
                    {
                        dayNames.map((day, i) => (
                            <th key={i} class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                <span class="xl:block lg:block md:block sm:block hidden">{day}</span>
                                <span class="xl:hidden lg:hidden md:hidden sm:hidden block">{dayNamesShort[i]}</span>
                            </th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                <tr class="text-center h-20">
                    {
                        Array.from({ length: 7 }).map((_, i) => (
                            <Day key={i} day={i + 1} month={month} year={year} appointments={appointment}/>
                        ))
                    }
                </tr>
                <tr class="text-center h-20">
                    {
                        Array.from({ length: 7 }).map((_, i) => (
                            <Day key={i} day={i + 8} month={month} year={year} appointments={appointment}/>
                        ))
                    }
                </tr>
                <tr class="text-center h-20">
                    {
                        Array.from({ length: 7 }).map((_, i) => (
                            <Day key={i} day={i + 15} month={month} year={year} appointments={appointment}/>
                        ))
                    }
                </tr>
                <tr class="text-center h-20">
                    {
                        Array.from({ length: 7 }).map((_, i) => (
                            <Day key={i} day={i + 22} month={month} year={year} appointments={appointment}/>
                        ))
                    }
                </tr>
                <tr class="text-center h-20">
                    {
                        Array.from({ length: 4 }).map((_, i) => (
                            <Day key={i} day={i + 28} month={month} year={year} appointments={appointment}/>
                        ))
                    }
                </tr>
                </tbody>
            </table>
            </div>
        </div>
	)
}

export default Appointments
