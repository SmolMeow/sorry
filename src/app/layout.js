import "./globals.css"

export const metadata = {
  title: "I'm Sorry",
  description: "My apollocheese to chhoter",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
