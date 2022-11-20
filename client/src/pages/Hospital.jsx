import '../output.css'
import { useParams } from 'react-router-dom';
import DoctorIntro from '../components/DoctorIntro';

const Hospital = () => {
    const { id } = useParams();

	return (
		<div class="">
            <h1 class="text-3xl mt-20 text-center font-semibold"> Welcome to {id.substring(1)} </h1>

            <DoctorIntro hospitalName={id}> </DoctorIntro>
		</div>
	)
}

export default Hospital
