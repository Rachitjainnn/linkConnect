"use client"
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'next-auth/react';

export default function logOutButton({
    className = 'lex items-center gap-2 border-0 p-2 px-4 shadow',
    iconLeft =false,
    iconClasses = ''
}){ 
    return(
        <button
            onClick={() => signOut()}
            className={className}>
            {iconLeft && (
                <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses}/>
            )}
            <span>Sign Out</span>
            {!iconLeft && (
                <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses}/>
            )}
        </button>
    );
}