
function BadgeComponent({className,children}:{className?:string,children:React.ReactNode}) {
    return (
        <div className={"p-2.5 rounded-[6px] bg-black08 "+className}>
            {children}
        </div>
    )
}

export default BadgeComponent
