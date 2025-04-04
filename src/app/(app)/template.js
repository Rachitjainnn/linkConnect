import { Lato } from "next/font/google";
import "../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";
import AppSideBar from "@/components/layout/AppSideBar";
import { Toaster } from "react-hot-toast";
import { Page } from "@/models/Page";
import dbConnect from "@/libs/mongoose";
import { headers } from "next/headers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const lato = Lato({ subsets: ['latin'], display: 'swap', variable: '--font-lato', weight: '400' });
export const metadata = {
  title: "LinkTree",
  description: "LinkTree",
};

export default async function AppTemplate({ children }) {
  // const headerList = headers()
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/')
  await dbConnect()
  const page = await Page.findOne({ owner: session?.user?.email })
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased`}
      >
        <Toaster />
        <main className="md:flex min-h-screen">
          <label htmlFor="navCb" className="md:hidden ml-8 mt-4 p-4 rounded-md bg-white shadow inline-flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
            <span>Open navigation</span>
          </label>
          <input id="navCb" type="checkbox" className="hidden" />
          <label htmlFor="navCb" className="hidden backdrop fixed inset-0 bg-black/80 z-10"></label>
          <aside className="bg-white w-48 p-4 pt-6 shadow fixed md:static -left-48 top-0 bottom-0 z-20 transition-all">
            <div className="sticky top-8 pt-2"> 
              <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto">
                <Image src={session.user.image} width={256}
                  height={256} alt={'avatar'} />
              </div>
              {page && (
                <Link
                  href={'/' + page.uri}
                  className="text-center mt-4 flex gap-1 items-center justify-center">
                  <FontAwesomeIcon icon={faLink} size="xl" className="text-blue-500 w-5 h-5 " />
                  <span className="text-xl text-gray-300">/</span>
                  <span>{page.uri}</span>
                </Link>
              )}

              <div className="text-center">
                <AppSideBar />
              </div>
            </div>
          </aside>
          <div className="grow">
            {children}
          </div>

        </main>
      </body>
    </html>
  );
}
