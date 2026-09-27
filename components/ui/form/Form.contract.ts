import { HTMLInputTypeAttribute, ReactNode } from "react"
import { Control, FieldValues, Path } from "react-hook-form"

export type InputType<T extends FieldValues> = Readonly<{
    control: Control<T>,
    errMsg?:string,
    labelTxt:ReactNode,
    name:Path<T>,
    type?: HTMLInputTypeAttribute
}>

export type SingleOptionType= {
    label: string,
    value: string
}

export type SelectOptionType<T extends FieldValues> = Readonly<{
    control: Control<T>,
    errMsg?:string,
    labelTxt:ReactNode,
    name:Path<T>,
    options?: Array<SingleOptionType>
}>