"use client";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";



export default function LoginWithGoogle(){
    
    return(
        <button
         onClick={() => signIn('google')} 
         className="bg-white shadow text-center w-full py-5 flex gap-5 justify-center items-center">
            <FontAwesomeIcon icon={faGoogle} className="w-5"/>
            <span>Sign In with Google</span>
        </button>
    )
}