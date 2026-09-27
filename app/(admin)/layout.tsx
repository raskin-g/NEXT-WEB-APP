import { Montserrat, Poppins } from "next/font/google"
import "../globals.css"
import AdminSidebar from "@/components/admin/partials/Sidebar"
import AdminHeader from "@/components/admin/partials/Header"

const PoppinsSans = Poppins({
    variable: "--font-custom-sans",
    weight: ["100","200","300","400","500","600","700","800","900"],
    subsets: ["latin"]
})

const MontserratMono = Montserrat({
    variable: "--font-custom-mono",
    subsets: ["latin"]
})

export default function AdminLayout({children}: LayoutProps<'/'>) {
    return(
        <html className={`${PoppinsSans.variable} ${MontserratMono.variable} antialiased`}>
            <body className="w-full flex h-screen bg-gray-50">
                <AdminSidebar/>
                <main className="flex w-full flex-col">
                    <AdminHeader/>
                    {children}
                </main>
            </body>
        </html>
    )
}