import React from "react"

interface InputProps {
    text: string;
    className: any;
    [key: string]: any; // Isso permite que outras propriedades sejam passadas, se necessário
  }


export default function Button({text, className, ...props}: InputProps){
    


    return(
        <button {...props} className={className}>
            {text}
        </button>
    )
}