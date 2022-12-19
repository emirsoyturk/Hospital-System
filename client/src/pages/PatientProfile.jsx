import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

// create a user profile page
const User = ({id}) => {
    const [user, setUser] = useState();
    const getPatient = () => {
		axios.get('http://localhost:4000/patients/fetch' + "?id=" + id)
		.then((res) =>
		{
			setUser(res.data[0][0])
            console.log(res.data[0][0])
		}
		)
		.catch(err => {
			console.log(err)
		}
		)
	}

    useEffect(() => {
        getPatient()
    }, [])

    if(!user) return (<div>Loading...</div>
    )

    return (
        <div class="bg-white p-3 shadow-sm rounded-sm p-16 ">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">First Name</div>
                        <div class="px-4 py-2">{user.Isim}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Last Name</div>
                        <div class="px-4 py-2">{user.Soyisim}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Gender</div>
                        <div class="px-4 py-2">{user.cinsiyet === 'K' ? "Kadin" : "Erkek"}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Blood Group</div>
                        <div class="px-4 py-2">{user.KanGrubu}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Height </div>
                        <div class="px-4 py-2">{user.Boy}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Weight</div>
                        <div class="px-4 py-2">{user.Kilo}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Birth date </div>
                        <div class="px-4 py-2">{user.DogumTarihi}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">TC Kimlik </div>
                        <div class="px-4 py-2">{user.TCKimlikNo}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;