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
					{
					Array.from({ length: 5 }).map((_, j) => (
						<tr class="text-center h-4">
						{
							Array.from({ length: 7 }).map((_, i) => (
								(i + 1 + j * 7 < 31 && 
								<td key={i} class="pt-6 rounded-xl hover:bg-blue-200" onClick={e => setAppointment(i + 1 + j * 7)}>
									<div class="px-2 py-2 cursor-pointer flex w-full justify-center"> {i + 1 + j * 7} </div>
								</td>
								)
							))
						}
						</tr>
					))
					}
				</tbody>
			</table>
		</div>
	)
}

const DoctorCard = ({ id, name, surname, unvan, brans}) => {
	const [selected, setSelected] = useState(false);
	const [date, setDate] = useState(null);
	const navigate = useNavigate();


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


	const RandevuAl = () =>
	{
		setSelected(false)
		notify("Randevu alındı")
		setTimeout(() => {
			navigate('/Appointments')
		}, 1000);
		
	}
	return (
		<div class="flex flex-row bg-slate-200 ml-auto mt-16 mr-auto w-[40rem] rounded-2xl"> 
			<div class="font-semibold pt-8 space-y-4 w-[45rem] h-[25rem] flex flex-col items-center ">
				<h1 class="mt-32"> {unvan} {name} {surname} </h1>
				<h1> {brans} </h1>	
				{selected && <span> {date} December </span>}
				{selected &&
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={e => RandevuAl()}>
						Confirm
					</button>
				}
				{selected &&
				<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={e => setSelected(false)}>
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
