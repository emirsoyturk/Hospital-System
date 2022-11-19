import '../../output.css'

const SignUp = () => {
	return (
		<div class="flex rounded-2xl bg-slate-50 shadow-[20px_35px_20px_-15px_rgba(0,0,0,0.3)] w-[50rem] h-[40rem] mx-auto mb-10 mt-10">
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
							required
						></input>
					</div>
				</div>
				<div class="flex flex-col">
					<label for="email"> Email </label>
					<input
						class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
						type="text"
						id="email"
						placeholder="Your email"
						required
					></input>
				</div>
				<div class="flex flex-row space-x-10">
					<div class="flex flex-col">
						<label for="password"> Password </label>
						<input
							class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
							type="password"
							id="password"
							placeholder="Password"
							required
						></input>
					</div>
					<div class="flex flex-col">
						<label for="password-confirm"> Confirm Password </label>
						<input
							class="bg-slate-200 rounded placeholder-gray-600 font-thin py-1.5 text-center"
							type="password"
							id="password-confirm"
							placeholder="Confirm"
							required
						></input>
					</div>
				</div>
				<div>
					<input id="confirm" type="checkbox" value="" required></input>
					<label for="confirm"> I accept all terms and condition</label>
				</div>
				<button
					type="submit"
					class="rounded-xl text-white w-[10rem] h-[2rem] mx-auto bg-indigo-600 "
				>
					Submit
				</button>
			</form>
		</div>
	)
}
export default SignUp
