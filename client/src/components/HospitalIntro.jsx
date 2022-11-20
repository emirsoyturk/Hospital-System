import '../output.css'
import HospitalCard from './HospitalCard'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HospitalIntro = () => {	
	const [hospitalNames, setHospitalNames] = useState(null)
	
	const fetchHospitals = () => {
		axios.get('http://localhost:4000/hospitals/')
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
		fetchHospitals()
	}, []);

	if(hospitalNames == null)
	{
		return;
	}

	return (
		<div class="flex flex-col items-center pt-12">
			<h1 class="text-3xl text-center font-semibold"> Find out about hospitals </h1>
			<h1 class="text-xl text-gray-400 text-center font-thin">
				Well qualified hospitals are ready to serve you.
			</h1>
			<div class="grid grid-cols-2 gap-16 pt-10">
				{hospitalNames.map((name, index) =>
					<HospitalCard key={index} id={index} name={name.HastaneAdi} city={name.Il} phoneNumber={name.TelefonNo}> </HospitalCard>
				)}
			</div>
		</div>
	)
}
export default HospitalIntro
