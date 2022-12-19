import '../../output.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

const SignUp = () => {
	const [proper, setProper] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [tcNo, setTcNo] = useState('');
	const [bloodType, setBloodType] = useState('');
	const [gender, setGender] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const patient = { firstName, lastName, tcNo, bloodType, gender, dateOfBirth, height, weight };
		axios.post('http://localhost:4000/patients/add', patient)
			.then(
				res => console.log(res.data)
				)
			.catch(err => console.log(err));
			
		// setFirstName('');
		// setLastName('');
		// setTcNo('');
		// setBloodType('');
		// setGender('');
		// setDateOfBirth('');
		// setHeight('');
		// setWeight('');

	}

	useEffect(() => {
		
		if(tcNo.length === 0 || tcNo === undefined)
			return;

		axios.get('http://localhost:4000/patients/fetch-patient-name' + "?token=" + tcNo)
			.then(res => {
				if(res.data[0].length > 0)
				{
					alert("Bu TC Kimlik Numarasina sahip bir hasta zaten kayitlidir.")
					setTcNo('');
				}
			})
			.catch(err => console.log(err))
	}, [tcNo])



	return (
		
		
		<div class="flex rounded-2xl mt-32 bg-slate-50 shadow-[20px_35px_20px_-15px_rgba(0,0,0,0.3)] w-[50rem] h-[40rem] mx-auto mb-10 mt-10">
			<div class="rounded-l-2xl bg-indigo-500 w-[10rem] h-[40rem]"></div>
			<form class="px-8 justify-center flex flex-col space-y-4 ">
				<h1 class="text-3xl pb-8"> Sign up for account </h1>
				<div class="flex flex-row space-x-10">
					<div class="flex flex-col">
						<label for="first-name"> First Name </label>
						<input
							class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
							type="text"
							id="first_name"
							placeholder="Your First Name"
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
							required
						></input>
					</div>
					<div class="flex flex-col">
						<label for="last-name"> Last Name </label>
						<input
							class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
							type="text"
							id="last_name"
							placeholder="Your Last Name"
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
							required
						></input>
					</div>
				</div>
				<div class="flex flex-row space-x-10">
					<div class="flex flex-col">
						<label for="password"> TC Kimlik NO </label>
						<input
							class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
							type="text"
							id="password"
							placeholder="12345678910"
							onChange={(e) => setTcNo(e.target.value)}
							value={tcNo}
							required
						></input>
					</div>
					<div class="flex flex-col">
						<label for="password-confirm"> Kan Grubu </label>
						<input
							class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
							type="text"
							id="password-confirm"
							placeholder="AB Rh-"
							onChange={(e) => setBloodType(e.target.value)}
							value={bloodType}
							required
						></input>
					</div>
				</div>
				
				<div class="flex flex-row space-x-10">
					<div class="flex flex-col">
						<label for="password"> Gender </label>
						<input
							class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
							type="text"
							id="password"
							placeholder="E/K"
							onChange={(e) => setGender(e.target.value)}
							value={gender}
							required
						></input>
					</div>
					<div class="flex flex-col">
						<label for="password-confirm"> Birth Date </label>
						<input
							class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
							type="text"
							id="password-confirm"
							placeholder="23/06/2002"
							onChange={(e) => setDateOfBirth(e.target.value)}
							value={dateOfBirth}
							required
						></input>
					</div>
				</div>
				<div class="flex flex-row space-x-10">
					<div class="flex flex-col">
						<label for="password"> Boy </label>
						<input
							class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
							type="text"
							id="password"
							placeholder="178"
							onChange={(e) => setHeight(e.target.value)}
							value={height}
							required
						></input>
					</div>
					<div class="flex flex-col">
						<label for="password-confirm"> Kilo </label>
						<input
							class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
							type="text"
							id="password-confirm"
							placeholder="58"
							onChange={(e) => setWeight(e.target.value)}
							value={weight}
							required
						></input>
					</div>
				</div>
				<button
					type="submit"
					class="rounded-xl text-white w-[10rem] h-[2rem] mx-auto bg-indigo-600 "
					onClick={handleSubmit}
				> Submit
				</button>
			</form>
		</div>
	)
}
export default SignUp
