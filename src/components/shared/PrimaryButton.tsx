import { ReactNode } from "react"

interface PrimaryButtonType{
    title:string,
    onClick?:()=>void,
    icon?:ReactNode,
    classNme?:string,
}
function PrimaryButton({onClick,title,icon,classNme}:PrimaryButtonType) {
    return (
       <button onClick={onClick} className={"flex gap-2 px-4 py-2 bg-primary  rounded-md hover:bg-green-500 transition "+classNme}>
        {icon}
            {title}
          </button>
    )
}

export default PrimaryButton
