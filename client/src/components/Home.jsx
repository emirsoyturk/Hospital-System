import Introduction from './Introduction'
import Services from './Services'
import '../output.css'
import React from 'react';
import HospitalIntro from './HospitalIntro';

const Home = () => {
	return (
		<div class="justify-between flex-col flex">
			<div class="space-y-10">
				<div class="mb-auto">
					<Introduction />
					<Services />
					<HospitalIntro />
				</div>
			</div>
		</div>
	)
}

export default Home
