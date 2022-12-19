import '../output.css'
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SmallCalender = ({setSelected, setDate}) => {
	const dayNamesShort = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

	const setAppointment = (date) => {
		setDate(date)
		setSelected(true)
	}
	const date = new Date();

	let currentDay = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();
	const firstDayOfMonth = new Date(year, month, 1).getDay();


	return (
		<div class="flex items-center justify-center p-4 rounded-2xl">
			<table class="w-[25rem]">
				<thead>
					<tr>
						{
							dayNamesShort.map((day, i) => (
								<th key={i} class="p-2 h-10 w-10 xl:text-sm text-xs">
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
                            i >= firstDayOfMonth - 1 ?
								i - firstDayOfMonth + 2 > currentDay ?
								<td key={i} class="pt-6 hover:bg-blue-200" onClick={e => setAppointment(i - firstDayOfMonth + 2 )}>
									<div class="px-2 py-2 cursor-pointer flex w-full justify-center"> {i - firstDayOfMonth + 1 + 1} </div>
								</td>
								:
								<td key={i} class="pt-6 bg-gray-300">
									<div class="px-2 py-2 cursor-pointer flex w-full justify-center"> {i - firstDayOfMonth + 1 + 1} </div>
								</td>
                            :
                            <td class=""> </td>
                        ))
                    }
                </tr>
                <tr class="text-center h-20">
                    {
                        Array.from({ length: 7 }).map((_, i) => (
							i - firstDayOfMonth + 9 > currentDay ?
							<td key={i} class="pt-6 hover:bg-blue-200" onClick={e => setAppointment(i - firstDayOfMonth + 9 )}>
								<div class="px-2 py-2 cursor-pointer flex w-full justify-center"> {i - firstDayOfMonth + 9} </div>
							</td>
							:
							<td key={i} class="pt-6 bg-gray-300">
								<div class="px-2 py-2 cursor-pointer flex w-full justify-center"> {i - firstDayOfMonth + 9} </div>
							</td>
                        ))
                    }
                </tr>
                <tr class="text-center h-20">
                    {
                        Array.from({ length: 7 }).map((_, i) => (
                            i - firstDayOfMonth + 16 > currentDay ?
							<td key={i} class="pt-6  hover:bg-blue-200" onClick={e => setAppointment(i - firstDayOfMonth + 16 )}>
								<div class="px-2 py-2 cursor-pointer flex w-full justify-center"> {i - firstDayOfMonth + 16} </div>
							</td>
							:
							<td key={i} class="pt-6 bg-gray-300">
								<div class="px-2 py-2 cursor-pointer flex w-full justify-center"> {i - firstDayOfMonth + 16} </div>
							</td>
                        ))
                    }
                </tr>
                <tr class="text-center h-20">
                    {
                        Array.from({ length: 7}).map((_, i) => (
                            i - firstDayOfMonth + 23 > currentDay ?
							<td key={i} class="pt-6  hover:bg-blue-200" onClick={e => setAppointment(i - firstDayOfMonth + 23 )}>
								<div class="px-2 py-2 cursor-pointer flex w-full justify-center"> {i - firstDayOfMonth + 23} </div>
							</td>
							:
							<td key={i} class="pt-6 bg-gray-300">
								<div class="px-2 py-2 cursor-pointer flex w-full justify-center"> {i - firstDayOfMonth + 23} </div>
							</td>
                        ))
                    }
                </tr>
                <tr class="text-center h-20">
                    {
                        Array.from({ length: 31 - 21 - firstDayOfMonth }).map((_, i) => (
							i - firstDayOfMonth + 30 > currentDay ?
							<td key={i} class="pt-6  hover:bg-blue-200" onClick={e => setAppointment(i - firstDayOfMonth + 30 )}>
								<div class="px-2 py-2 cursor-pointer flex w-full justify-center"> {i - firstDayOfMonth + 30} </div>
							</td>
							:
							<td key={i} class="pt-6 bg-gray-300">
								<div class="px-2 py-2 cursor-pointer flex w-full justify-center"> {i - firstDayOfMonth + 30} </div>
							</td>
                        ))
                    }
                </tr>
					
				</tbody>
			</table>
		</div>
	)
}

const DoctorCard = ({ id, name, surname, unvan, brans, hastaNo}) => {
	const [selected, setSelected] = useState(false);
	const [hourSelected, setHourSelected] = useState(false);
	const [date, setDate] = useState(null);
	const navigate = useNavigate();

	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	
	const notify = (sentence) => toast.success(sentence, {
		style: {
			border: '1px solid #713200',
			padding: '16px',
			color: '#713200',
			background: '#fff',
			fontSize: '1.2rem',
			fontWeight: 'bold',
		},
		iconTheme: {
			primary: '#713200',
			secondary: '#fff',
		},
	});

	const random9DigitNumber = () => {

		let randevuNo =  Math.floor(100000000 + Math.random() * 900000000);
		//check randevuNo exists
		axios.get('http://localhost:4000/patients/get-appointment-by-randevuNo?randevuNo='+randevuNo)
		.then(res => {
			if(res.data[0].length > 0)
			{
				random9DigitNumber()
			}
		})

		return randevuNo;

	}

	const hourSelectedFunc = (hour) => {
		setHourSelected(hour)
	}



	const RandevuAl = (randevuTuru) =>
	{
		setSelected(false)
		setHourSelected(false)
		console.log(id)
		notify(`Randevu alindi\n${unvan} ${name} ${surname}`)
		axios.post('http://localhost:4000/patients/add-appointment', {
			"randevuNo": random9DigitNumber(),
			"randevuTuru": randevuTuru,
			"randevuTarihi": `${date}/${currentMonth+1}/${currentYear} ${hourSelected}:00`,
			"hastaNo": hastaNo,
			"doktorNo": id
		})

		setTimeout(() => {
			navigate('/Appointments')
		}, 1000);
		
	}
	return (
		<div class="flex flex-row bg-slate-200 ml-auto mt-16 mr-auto w-[50rem] rounded-2xl"> 
			<div class="font-semibold pt-8 w-[45rem] h-[25rem] flex flex-col items-center ">
				{
					selected && <div class="grid grid-cols-4">
					{
						Array.from({ length: 10 }).map((_, i) => (
							// hour button
								<a key={i} class="bg-blue-500 p-8 mx-2 my-2 text-align col-span-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={e => hourSelectedFunc(8 + i)}>
									{8 + i}:00
								</a>
						))
						
					}	
					</div>
	
				}
				

				<h1 class="mt-8"> {unvan} {name} {surname} </h1>
				<h1> {brans} </h1>	
				{hourSelected && <span> {date} December </span>}
				<div class="flex flex-row ml-4 mt-8 space-x-2">
					{hourSelected &&
						<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded-full" onClick={e => RandevuAl("Kontrol")}>
							Kontrol
						</button>
					}
					{hourSelected &&
						<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded-full" onClick={e => RandevuAl("Ameliyat")}>
							Ameliyat
						</button>
					}
					{hourSelected &&
						<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded-full" onClick={e => RandevuAl("Muayene")}>
							Muayene
						</button>
					}
				</div>
				
				{hourSelected &&
				<button class="bg-red-500 hover:bg-red-700 mt-4 text-white font-bold py-2 px-4 rounded-full" onClick={e => setSelected(false)}>
					Reject
				</button>}
				


							
			</div>
			<div>
				<SmallCalender setSelected={setSelected} setDate={setDate}/>
			</div>
			<Toaster />
		</div>
		
	)
}
export default DoctorCard
