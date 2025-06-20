interface DataTypes {
  img: string;
}
function MultiImgCardComponent({ img }: DataTypes) {
  return (
    <div className="w-[295.4px] p-[30px] bg-[#1A1A1A] min-w-[295px] ">
      <div className="grid gap-1.5 grid-cols-2  bg-linear-to-t relative ">
        <img
          className="w-[115.2px] h-[123.5px] object-cover"
          src={img}
          alt=""
        />
        <img
          className="w-[115.2px] h-[123.5px] object-cover"
          src={img}
          alt=""
        />
        <img
          className="w-[115.2px] h-[123.5px] object-cover"
          src={img}
          alt=""
        />
        <img
          className="w-[115.2px] h-[123.5px] object-cover"
          src={img}
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.53)] pointer-events-none"></div>
      </div>
      <div className="flex justify-between relative top-2 items-center">
        <p className="text-[18px] font-semibold">action</p>
        <img src="svg/arrow-right.svg" width={30} alt="icon" />
      </div>
    </div>
  );
}

export default MultiImgCardComponent;
