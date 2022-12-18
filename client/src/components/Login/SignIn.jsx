import '../../output.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const loginUser = async (credentials) => {
	const mail = parseInt(credentials.mail);
	const password = parseInt(credentials.password);

	if(!isNaN(mail) && !isNaN(password))
	{
		const verifiedUser = await axios.get('http://localhost:4000/login?userName=' + mail + '&password=' + password)
		console.log(verifiedUser.data);
		return verifiedUser.data;
	}
}

const SignIn = ({setToken, setUserType}) => {
	const navigate = useNavigate();
	const [mail, setMail] = useState();
  	const [password, setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();
		const verify = await loginUser({
			mail,
			password
		});
		
		if(verify !== null && verify !== "null")
		{	
			setToken(mail);
			setUserType(verify.userType);
			navigate("/");
		}
		else
		{
			alert("Wrong email or password");
		}
		sessionStorage.setItem('token', mail);
		sessionStorage.setItem('userType', verify.userType);

	}

	return (
		<div class="flex flex-col mt-32 space-y-16 rounded-2xl bg-slate-100 border-4 border-blue-200 shadow-[20px_35px_20px_-15px_rgba(0,0,0,0.3)] w-[50rem] h-[40rem] mx-auto">
			<h1 class="text-4xl font-semibold text-center pt-16"> Sign in </h1>
			<form class="flex flex-col mx-auto" onSubmit={handleSubmit}>
				<label class="text-xl" for="email"> Email </label>
				<input
					class="bg-slate-200 rounded placeholder-gray-600 font-thin px-[10rem] py-1.5 text-center"
					type="text"
					id="email"
					placeholder="Your email"
					required
					onChange={e => setMail(e.target.value)}
				></input>
				<label class="text-xl mt-10" for="password"> Password </label>
				<input
					class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
					type="password"
					id="password"
					placeholder="Password"
					required
					onChange={e => setPassword(e.target.value)}
				></input>
				<button
					type="submit"
					class="rounded-xl font-semibold mt-16 mx-auto text-white w-[10rem] h-[2.5rem] bg-indigo-600 "
				>
					Submit
				</button>
			</form>
		</div>
	)
}

SignIn.propTypes = {
	setToken: PropTypes.func.isRequired,
	setUserType: PropTypes.func.isRequired
}

export default SignIn