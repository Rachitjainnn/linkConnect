import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import Link from "next/link"
import LogOutButton from "./buttons/logOutButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

export default async function Header(){
    const session = await getServerSession(authOptions)
    
    return(
        <header className="bg-white p-4">
            <div className="max-w-4xl px-6 flex justify-between mx-auto ">
                <div className="flex items-center gap-6">
                    <Link href={'/'} className="flex items-center gap-2 text-blue-500">
                        <FontAwesomeIcon icon = {faLink} className="text-blue-600"/> 
                        <span className="font-bold">LinkConnect</span>
                    </Link>
                    <nav className="flex items-center gap-4 text-sm text-slate-500">
                        <Link href={'/about'}>About</Link>
                        <Link href={'/pricing'}>Pricing</Link>
                    </nav>
                </div>
                <nav className="flex items-center gap-4 text-sm text-slate-500">
                    {!!session && (
                        <>
                        <Link href={'/account'}>Hello, {session?.user?.name}</Link>
                        <LogOutButton iconClasses={"h-5 w-5"}/>
                        </>
                    )}


                    {!session && (
                        <>
                        <Link className="cursor-pointer" href={'/login'}>Create Account</Link> 
                        <Link className="cursor-pointer" href={'/login'}>Sign In</Link>
                        </>
                    )}                    
                </nav>
            </div>
    </header>
    )
}