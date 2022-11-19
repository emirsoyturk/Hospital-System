import '../output.css'
import Doctor from './Doctor'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorIntro = () => {	
	const [hospitalNames, setHospitalNames] = useState(null)
	
	const fetchHospitalNames = () => {
		axios.get('http://localhost:4000/hospitals/fetch-names')
		.then((res) => 
		{
			setHospitalNames(res.data[0])
			
		})
		.catch((err) => 
		{
			console.log(err);
		});
	};
	useEffect(() => {
		fetchHospitalNames()
	}, []);

	if(hospitalNames == null)
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
				{hospitalNames.map((name, index) =>
					<Doctor key={index} id={index} name={name.HastaneAdi}> </Doctor>
				)}
			</div>
		</div>
	)
}
export default DoctorIntro
