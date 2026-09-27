import { Controller, FieldValues, useController } from "react-hook-form"
import { InputType, SelectOptionType, SingleOptionType } from "./Form.contract"

export const Input =<T extends FieldValues> ({control, errMsg='', labelTxt, name, type='text'}: InputType<T>) => {
    return(
    <>
    <div className="flex flex-col w-full lg:flex-row items-center">
                <label htmlFor={name} className="w-full lg:w-1/3 font-semibold text-lg">
                {labelTxt}
                </label>
                <div className="w-full flex flex-col">
                    <Controller name={name}
                    control={control}
                    render={({field})=>{
                        return <>
                        <input type={type} {...field} id={name} placeholder={`Enter your ${name}...`}
                            className={`w-full border border-gray-300 p-2 px-4 rounded-md shadow bg-gray-50
                                ${errMsg ? "focus-visible:outline-red-700 text-red-700" : "focus-visible:outline-green-700 border-gray-300"}`}
                        />
                        <span className="text-sm text-red-800 font-semibold italic">
                            {errMsg}
                            </span>
                        </>
                    }} />
                </div>
            </div>
    </>
    )

}

export const SelectOption =<T extends FieldValues> ({control, errMsg='', labelTxt, name, options}: SelectOptionType<T>) => {
    const {field} = useController({
        name: name, control: control
    })
    return(
    <>
    <div className="flex flex-col w-full lg:flex-row items-center">
                <label htmlFor={name} className="w-full lg:w-1/3 font-semibold text-lg">
                {labelTxt}
                </label>
                <div className="w-full flex flex-col">
                    <select {...field} id={name} className={`w-full border border-gray-300 p-2 px-4 rounded-md shadow bg-gray-50
                                ${errMsg ? "focus-visible:outline-red-700 text-red-700" : "focus-visible:outline-green-700 border-gray-300"}`}>
                        <option value="">-- Select any One --</option>
                        {
                            options && options.map((option: SingleOptionType, i: number)=>{
                                return <option key={i} value={option.value}>
                                    {option.label}
                                </option>
                            })
                        }
                    </select>
                        <span className="text-sm text-red-800 font-semibold italic">
                            {errMsg}
                            </span>
                       
                </div>
            </div>
    </>
    )

}