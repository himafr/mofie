interface DataTypes{
    img:string
}
function MultiImgCardComponent({img}:DataTypes) {
    return (
        <div className="w-[295.4px] p-[30px] bg-[#1A1A1A]">
            
            <div className="grid gap-1.5 grid-cols-2  bg-linear-to-t ">
                <img className="w-[115.2px] h-[123.5px] object-cover" src={img} alt="" />
                <img className="w-[115.2px] h-[123.5px] object-cover" src={img} alt="" />
                <img className="w-[115.2px] h-[123.5px] object-cover" src={img} alt="" />
                <img className="w-[115.2px] h-[123.5px] object-cover" src={img} alt="" />
             
            </div>
            <h3>
                action
            </h3>
        </div>
    )
}

export default MultiImgCardComponent
