"use client"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";


export default function HeroForm({user}){

    useEffect(()=> {
        if('localStorage' in window && window.localStorage.getItem('username')){
            const username = window.localStorage.getItem('username');
            window.localStorage.removeItem('username');
            redirect('/account?username=' + username);
        }
    },[])

    const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        
        if(username.length>0){
           if(user){
            redirect('/account?username=' + username);
           } else {
            window.localStorage.setItem('username', username);
            await signIn('google')
           }
        }
    }
    return (
      <form 
        onSubmit={handleSubmit} 
        className="inline-flex items-center bg-white shadow-lg shadow-gray-500/20 max-w-full overflow-x-auto transform scale-90 sm:scale-100"
      > 
        <span className="bg-white py-4 pl-2 text-sm sm:text-base whitespace-nowrap"> 
          LinkConnect.to/ 
        </span> 
        <input 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          type="text" 
          className="py-4 min-w-0 flex-1"
          style={{backgroundColor: 'white', marginBottom: 0, paddingLeft: 0}}
          placeholder="username"
        /> 
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-4 px-2 sm:px-6 cursor-pointer whitespace-nowrap"
        > 
          Join for free 
        </button> 
      </form>
    )
}