import Introduction from './Introduction'
import Services from './Services'
import DoctorIntro from './DoctorIntro'
import '../output.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home = () => {
	return (
		<div class="justify-between flex-col flex">
			<div class="space-y-10">
				<div class="mb-auto">
					<Introduction />
					<Services />
					<DoctorIntro />
				</div>
			</div>
		</div>
	)
}

export default Home
