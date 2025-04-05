'use client'
import { useState } from "react"
import Link from "next/link"
import LogOutButton from "./buttons/logOutButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

export default function HeaderClient({ session }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-white p-4 shadow-md">
            <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <Link href='/' className="flex items-center gap-2 text-blue-500">
                        <FontAwesomeIcon icon={faLink} className="text-blue-600" />
                        <span className="font-bold text-lg">LinkConnect</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-4 text-sm text-slate-500">
                        <Link href="/about">About</Link>
                        <Link href="/pricing">Pricing</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-4 text-sm text-slate-500">
                        {session ? (
                            <>
                                <Link href="/account">Hello, {session.user?.name}</Link>
                                <LogOutButton iconClasses="h-5 w-5" />
                            </>
                        ) : (
                            <>
                                <Link href="/login">Create Account</Link>
                                <Link href="/login">Sign In</Link>
                            </>
                        )}
                    </div>

                    <button
                        className="md:hidden text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mx-4 mt-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200 space-y-3 text-slate-600 text-sm">
                    <nav className="flex flex-col gap-2">
                        <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-500">About</Link>
                        <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Pricing</Link>
                    </nav>
                    <hr className="my-2" />
                    <div className="flex flex-col gap-2">
                        {session ? (
                            <>
                                <Link href="/account" onClick={() => setIsOpen(false)} className="hover:text-blue-500">
                                    Hello, {session.user?.name}
                                </Link>
                                <div className="mt-1">
                                    <LogOutButton iconClasses="h-5 w-5" />
                                </div>
                            </>
                        ) : (
                            <>
                                <Link href="/login" onClick={() => setIsOpen(false)} className="hover:text-blue-500">
                                    Create Account
                                </Link>
                                <Link href="/login" onClick={() => setIsOpen(false)} className="hover:text-blue-500">
                                    Sign In
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}

