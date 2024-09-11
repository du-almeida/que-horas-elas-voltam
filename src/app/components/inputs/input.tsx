"use client"
import { ErrorMessage, Field } from "formik";
import React from "react"

interface InputProps {
    name: string;
    label?: string;
    Type?: string; // Se você pretende usar um tipo de elemento, como 'input', 'textarea', etc.
    required?: any;
    [key: string]: any; // Isso permite que outras propriedades sejam passadas, se necessário
  }


export default function Input({name, label, type, required, ...props}: InputProps){
    


    return(
        <div className="flex flex-col">
            <div className="capitalize">
                {label || name} <span className="text-red-500">{required && "*"}</span>
            </div>
            <Field name={name} type={type} {...props} className="p-2 rounded border-zinc-200 border border-solid outline-0 focus:border-violet-600"></Field>
            <div className="text-red-500 text-xs mt-1">
                <ErrorMessage name="{name"></ErrorMessage>
            </div>
        </div>
    )
}