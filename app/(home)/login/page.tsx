import LoginForm from "@/components/auth/LoginForm"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata ={
    title:"Login Page || Ecommerce",
    description:"Ecommerce platform, Where after login you get all the access for the features"
}
export default function LoginPage() {
    return(
    <>
        <section className="w-7xl mx-auto py-10">
            <div className="w-full flex flex-col bg-blue-50 p-10 rounded-md shadow-lg gap-5">
                <div className="border-b pb-5 border-gray-300">
                    <h1 className="text-5xl font-semibold text-shadow-lg text-primary-900">Login Form here</h1>
                </div>
                <div>
                   <LoginForm /> 

                   <div className="w-full flex items-center gap-3">
                        <span className="h-px bg-gray-300 w-full"></span>
                        <p className="text-lg font-semibold">OR</p>
                        <span className="h-px bg-gray-300 w-full"></span>
                        
                   </div>
                   <Link className="w-full flex rounded-full border border-primary-800 font-semibold items-center justify-center p-2 text-primary-700 hover:scale-103 transition duration-300" href={'/register'}>Register from here!</Link>
                </div>
            </div>
        </section>
    </>
)
}