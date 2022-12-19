import '../output.css'
import React from 'react';
import DoctorCard from '../components/DoctorCard';
import RecentDoctors from './RecentDoctor';

const Doctors = ({id, setUserType, selectedDoctors}) => {	


	return (
        <>
            {
                selectedDoctors.length === 0 && (
                    <RecentDoctors id={id} setUserType={setUserType}/>
                )
            }
            {
                selectedDoctors.length !== 0 && (
                    <div class="flex flex-col items-center pt-12">
                    
                    <h1 class="text-3xl text-center font-semibold"> Well qualified doctors are ready to serve you. </h1>
                    <div class="flex flex-col mt-16 mb-16">
                        {
                            selectedDoctors.map((doctor, i) => (
                                console.log(doctor),
                                <DoctorCard key={i} id={doctor.TCKimlikNo} hastaNo={id} name={doctor.Isim} surname={doctor.Soyisim} unvan={doctor.Unvan} brans={doctor.Brans} />
                            ))
                        }
                    </div>
                    </div>
                )
            }
            
        </>
		
	)
}
export default Doctors
