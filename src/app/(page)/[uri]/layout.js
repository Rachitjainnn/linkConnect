import { Geist, Geist_Mono,Lato } from "next/font/google";
import "../../globals.css";

const lato = Lato({subsets:['latin'],display:'swap',variable: '--font-inter',weight: '400'});

export const metadata = {
  title: 'LinkConnect',
  description: 'A link sharing platform',
  icons: {
    icon: '/link-solid.svg',
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} ${lato.variable} antialiased`}
      >
        <main>
          <div>
          {children}
          </div>
        </main>
      </body>
    </html>
  );
}
