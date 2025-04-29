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
      <body>{children}</body>
    </html>
  )
}
