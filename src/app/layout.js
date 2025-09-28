import "./globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Toaster } from "@/components/ui/toaster" 

export const metadata = {
  title: "My Cart App",
  description: "Shopping cart with Next.js + shadcn/ui",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-10">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
         <Toaster />
      </body>
    </html>
  )
}
