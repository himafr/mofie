function IconBorder({src,className}:{src:string,className?:string}) {
    return (
        <div className={"bg-[#1A1A1A] p-3 rounded-[8px]"+" "+className}>
            <img src={src} width={24}  />
        </div>
    )
}

export default IconBorder
