import '../output.css'
import { useState } from 'react';

const DoctorAdmin = () => {
    const [showAppointment, setShowAppointment] = useState(false);
    const popUpAppointment = () => {
        setShowAppointment(true)
    }
    const popDownAppointment = () => {
        setShowAppointment(false)
    }

    const MakeAppointment = () =>
    {
        return (
            <div class="bg-black bg-opacity-50 flex overflow-x-auto overflow-y-auto fixed top-0 right-0 left-0 right-0 z-50 p-4 w-full h-full">
                <div class="w-1/2 h-3/4 m-auto flex flex-col rounded-xl bg-indigo-300">
                    <button class="text-white hover:cursor-pointer font-semibold text-2xl ml-4 mt-4 bg-red-600 border-2 rounded-full flex items-center justify-center w-10 h-10" onClick={popDownAppointment}> X </button>
                    <span class="block text-3xl mx-auto mb-16 pt-16 "> Make an Appointment </span>
                    <form class="w-full flex flex-col ">
                        <div class="flex flex-wrap">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Isim
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Berfin"></input>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Soyisim
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Ozcubuk"></input>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Il
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Ankara"></input>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Ilce
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Golbasi"></input>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Klinik
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="KBB"></input>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Hastane
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Ankara Devlet"></input>
                            </div>
                            <button class="bg-gray-200 py-2 px-12 rounded mx-auto"> Ara </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

	return (
		<div class="grid grid-cols-12 gap-x-4">
			<div class="bg-slate-100 col-start-1 col-span-1 pt-8 shadow-[10px_5px_5px_-5px_rgba(0,0,0,0.2)]">
				<ul class="flex flex-col justify-between">
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1255/1255477.png" alt="" />
						<h1 class="text-xs"> Dashboard </h1>
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1250/1250620.png" alt="" />
						<h1 class="text-xs"> Appointments </h1>
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1230/1230170.png" alt="" />
						<h1 class="text-xs"> Doctors </h1>
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/482/482636.png" alt="" />
						<h1 class="text-xs"> Profile </h1>
					</li>
					<li class="flex flex-col items-center p-4 hover:bg-slate-200 hover:cursor-pointer">
						<img class="w-8" src="https://cdn-icons-png.flaticon.com/512/1243/1243950.png" alt="" />
						<h1 class="text-xs"> Log out </h1>
					</li>
				</ul>
			</div>
			<div class="bg-slate-100 col-start-2 col-span-11">
				<h1 class="px-16 pt-8 text-xl font-bold text-indigo-700"> Welcome, Emir Soyturk </h1>
				<div class="grid grid-cols-6 px-8 py-8 gap-y-8 gap-x-12">
					<div class="flex flex-col items-center col-start-1 col-span-3 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] h-[25rem] p-4">
                        <button class="hover:bg-indigo-400 hover:text-white hover:cursor-pointer border border-4 border-indigo-400 rounded-2xl p-2 mt-8 text-3xl text-indigo-600" onClick={popUpAppointment}> Make an appointment </button>
                        <div class="mt-8 bg-blue-100 flex flex-col items-center w-3/4 h-1/2 space-y-2 rounded-2xl">
                            <span class="m-4 "> Last appointment </span>
                            <span class="text-2xl mx-auto "> Ankara Devlet </span>
                            <span class="text-2xl mx-auto "> Prof. Berfin Ozcubuk</span>
                            <span class="text-2xl mx-auto "> Estetik </span>
                            {
                                showAppointment ? <MakeAppointment /> : null
                            }
                        </div>
                        
                    </div>
                    
					<div class="col-start-4 col-span-3 bg-slate-100 rounded shadow-[5px_5px_30px_5px_rgba(0,0,0,0.2)] h-[20rem] p-4">
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default DoctorAdmin
