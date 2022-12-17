import Introduction from './Introduction'
import Services from './Services'
import '../output.css'
import React from 'react';

const Home = () => {
	return (
		<div class="justify-between flex-col flex">
			<div class="space-y-10">
				<div class="mb-auto">
					<Introduction />
					<Services />
				</div>
			</div>
		</div>
	)
}

export default Home
