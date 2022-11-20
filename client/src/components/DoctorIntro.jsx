import '../output.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorCard from '../components/DoctorCard'

const DoctorIntro = ({hospitalName}) => {	
	const [doctorNames, setDoctorNames] = useState(null)
	
	const fetchDoctors = () => {
		axios.get('http://localhost:4000/doctors/fetchByHospital?name=' + hospitalName)
		.then((res) => 
		{
			setDoctorNames(res.data[0])
		})
		.catch((err) => 
		{
			console.log(err);
		});
	};
	useEffect(() => {
		fetchDoctors()
	}, []);

	if(doctorNames == null)
	{
		return;
	}

	return (
		<div class="flex flex-col items-center pt-12">
			<h1 class="text-3xl text-center font-semibold"> Meet our Doctors </h1>
			<h1 class="text-xl text-gray-400 text-center font-thin">
				Well qualified doctors are ready to serve you.
			</h1>
			<div class="grid grid-cols-2 gap-16 pt-10">
				{doctorNames.map((doctor, index) =>
					<DoctorCard key={index} id={index} name={doctor.Isim} surname={doctor.Soyisim} unvan={doctor.Unvan} brans={doctor.Brans} > </DoctorCard>
				)}
			</div>
		</div>
	)
}
export default DoctorIntro
