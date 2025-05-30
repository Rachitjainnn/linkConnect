import {Lato} from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

const lato = Lato({subsets:['latin'],display:'swap',variable: '--font-inter',weight: '400'});

export const metadata = {
  title: 'LinkConnect',
  description: 'A link sharing platform',
  icons: {
    icon: '/link-solid.svg',
  }
}


export default async function RootLayout({ children }) {

  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body
        className={`${lato.className} ${lato.variable} antialiased`}
      >
        <main>
          <Header  session={session}/>
          <div className="max-w-4xl mx-auto p-6 ">
          {children}
          </div>
        </main>
      </body>
    </html>
  );
}
