'use client';
import {useForm } from "react-hook-form"
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import Link from "next/link";
import { Input, SelectOption } from "@/components/ui/form/Input";


const RegisterSchema = z.object ({
        fullName: z.string().min(2).max(50),
        username: z.email("Invalid email format").nonempty("Username is required").nonoptional(),
        password: z.string().nonempty("Password is required").nonoptional(),
        confirmPassword: z.string().nonempty("Re-Password is required").nonoptional(),
        role: z.string().nonempty("Password is required").nonoptional()
    })
type RegisterData = z.infer<typeof RegisterSchema>

export default function RegisterForm(){
    
    const {control, handleSubmit, formState: {errors}} = useForm<RegisterData>({
        resolver: zodResolver(RegisterSchema)
    })
    const submitEvent = (data:RegisterData) => {
        console.log(data)
    }
    return(<>
    <form onSubmit={handleSubmit(submitEvent)} className="flex w-full flex-col gap-5">
        <Input control={control} name="fullName" labelTxt={<>Full Name</>} errMsg={errors?.fullName?.message} />
        <Input control={control} name="username" type="email" labelTxt={<>Username(Email):</>} errMsg={errors?.username?.message} />
        <Input control={control} name="password" type="password" labelTxt={<>Password:</>} errMsg={errors?.password?.message} />
        <Input control={control} name="confirmPassword" type="password" labelTxt={<>Re-Password:</>} errMsg={errors?.confirmPassword?.message} />
        <SelectOption control={control} name="role" labelTxt={<>Role:</>} errMsg={errors?.role?.message} options={[
            {value: "seller", label:"Seller"},
            {value: "customer", label:"Buyer"} ]}/>

        <div className="flex w-full items-center justify-end">
                <p className="text-sm font-light">
                    By Registering into the platform, you agree with
                    <Link className="text-primary-600 font-semibold text-md underline italic tracking-tight" href={"/terms-and-policy"}>terms and condition</Link>and
                    <Link className="text-primary-600 font-semibold text-md underline italic tracking-tight" href={"/privacy-policy"}>Privacy Policy</Link>.
                </p>
        </div>
        <div className="flex w-full items-center gap-4">
            <button className="hover:scale-103 transition duration-300 w-full bg-red-900 text-white hover:bg-red-800 p-2 rounded-md cursor-pointer font-semibold" type="reset">Reset</button>
            <button className="hover:scale-103 transition duration-300 w-full bg-primary-900 text-white hover:bg-primary-800 p-2 rounded-md cursor-pointer font-semibold" type="submit">Register</button>
        </div>
    </form>
    </>)
}