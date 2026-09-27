'use client';
import { Controller, useForm } from "react-hook-form"
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import Link from "next/link";


const LoginSchema = z.object ({
        username: z.email("Invalid email format").nonempty("Username is required").nonoptional(),
        password: z.string().nonempty("Password is required").nonoptional()
    })
type Credentials = z.infer<typeof LoginSchema>

export default function LoginForm(){
    
    const {control, handleSubmit, formState: {errors}} = useForm<Credentials>({
        resolver: zodResolver(LoginSchema)
    })
    const submitEvent = (data:Credentials) => {
        console.log(data)
    }
    return(<>
    <form onSubmit={handleSubmit(submitEvent)} className="flex w-full flex-col gap-5">
        <div className="flex w-full items-center">
            <label htmlFor="username" className="w-1/3 font-semibold text-lg">Username(email): </label>
            <div className="w-2/3 flex flex-col">
                <Controller name="username" control={control} render={({field})=>{
                    return <>
                    <input type="email" {...field} id="username" placeholder="Enter your username..." 
                        className={`w-full border border-gray-300 p-2 px-4 rounded-md shadow bg-gray-50
                        ${errors?.username ? "focus-visible:outline-red-700 text-red-700" : "focus-visible:outline-green-700 border-gray-300"}`}
                    />
                    <span className="text-sm text-red-800 font-semibold italic">{errors?.username?.message}</span>
                    </>
                }} />
            </div>
        </div>
        <div className="flex w-full items-center">
            <label htmlFor="password" className="w-1/3 font-semibold text-lg">Password: </label>
            <div className="w-2/3 flex flex-col">
                <Controller name="password" control={control} render={({field})=>{
                    return <>
                    <input type="password" {...field} id="password" placeholder="Enter your password..." 
                        className={`w-full border border-gray-300 p-2 px-4 rounded-md shadow bg-gray-50
                        ${errors?.password ? "focus-visible:outline-red-700 text-red-700" : "focus-visible:outline-green-700 border-gray-300"}`}
                    />
                    <span className="text-sm text-red-800 font-semibold italic">{errors?.password?.message}</span>
                    </>
                }} />
            </div>
        </div>
        <div className="flex w-full items-center justify-end">
                <p className="text-sm font-light">
                    By loggin into the platform, you agree with
                    <Link className="text-primary-600 font-semibold text-md underline italic tracking-tight" href={"/terms-and-policy"}>terms and condition</Link>and
                    <Link className="text-primary-600 font-semibold text-md underline italic tracking-tight" href={"/privacy-policy"}>Privacy Policy</Link>.
                </p>
        </div>
        <div className="flex w-full items-center gap-4">
            <button className="hover:scale-103 transition duration-300 w-full bg-red-900 text-white hover:bg-red-800 p-2 rounded-md cursor-pointer font-semibold" type="reset">Reset</button>
            <button className="hover:scale-103 transition duration-300 w-full bg-primary-900 text-white hover:bg-primary-800 p-2 rounded-md cursor-pointer font-semibold" type="submit">Login</button>
        </div>
    </form>
    </>)
}