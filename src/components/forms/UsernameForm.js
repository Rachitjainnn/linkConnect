'use client'
import grabUsername from "@/actions/grabUsername";
import {useState} from 'react';
import {redirect} from "next/navigation";
import SubmitButton from "../buttons/SubmitButton";

export default function UsernameForm({username}){
    const[taken,setTaken] = useState(false);

    async function handleSubmit(formData){
        const result = await grabUsername(formData);
        setTaken(result === false);
        if(result){
            redirect('/account?created='+formData.get('username'))
        }
    }
    return(
        <form action={handleSubmit}>
                <h1 className="text-4xl text-center mb-2 font-bold">
                    Grab your username
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Choose your username
                </p>
                <div className="max-w-md mx-auto">
                    <input
                        name="username"
                        className="block p-2 mx-auto border w-full mb-2 text-center"
                        type="text" placeholder="username"
                        defaultValue={username}
                    />
                {taken && (<div className="text-center text-red-500 mb-2">Username taken</div>)}
                    
                   <SubmitButton>
                        Grab username
                   </SubmitButton>

                </div>
            </form>
    );
}