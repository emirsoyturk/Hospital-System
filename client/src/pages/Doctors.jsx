import '../output.css'
import React from 'react';
import DoctorCard from '../components/DoctorCard';

const Doctors = ({selectedDoctors}) => {	


	return (
        <>
            <div class="flex flex-col items-center pt-12">
                
                <h1 class="text-3xl text-center font-semibold"> Well qualified doctors are ready to serve you. </h1>
                <div class="flex flex-col mt-16 mb-16">
                    {
                        selectedDoctors.map((doctor, i) => (
                            <DoctorCard key={i} id={i} name={doctor.Isim} surname={doctor.Soyisim} unvan={doctor.Unvan} brans={doctor.Brans} />
                        ))
                    }
                </div>
            </div>
        </>
		
	)
}
export default Doctors
