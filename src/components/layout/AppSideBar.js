'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogOutButton from "@/components/buttons/logOutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChartLine, faFileLines } from "@fortawesome/free-solid-svg-icons";

export default function AppSideBar() {
  const path = usePathname();
  
  return (
    <nav className="inline-flex mx-auto text-gray-500 flex-col text-center mt-12 gap-6">
      <Link href={'/account'}
        className={"flex gap-4 items-center" + (path === '/account' ? ' text-blue-500' : '')}>
        <div className="w-6 h-6 flex items-center justify-center">
          <FontAwesomeIcon
            fixedWidth
            icon={faFileLines}
            className="w-6 h-6"
          />
        </div>
        <span>My Page</span>
      </Link>
      
      <Link href={'/analytics'}
        className={"flex gap-4 items-center" + (path === '/analytics' ? ' text-blue-500' : '')}>
        <div className="w-6 h-6 flex items-center justify-center">
          <FontAwesomeIcon
            fixedWidth
            icon={faChartLine}
            className="w-6 h-6"
          />
        </div>
        <span>Analytics</span>
      </Link>
      
      <LogOutButton
        iconLeft={true}
        className="flex text-gray-500 gap-4 items-center cursor-pointer"
        iconClasses="w-6 h-6"
      />
      
      <Link
        href={'/'}
        className="flex items-center gap-4 text-gray-400 border-t pt-4"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="w-6 h-6"
          />
        </div>
        <span>Back to website</span>
      </Link>
    </nav>
  )
}