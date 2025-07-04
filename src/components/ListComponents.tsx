import MultiImgCardComponent from "./MultiImgCardComponent"

function ListComponents({top=false}:{top?:boolean}) {
    return (
        <div className="flex overflow-x-auto space-x-4 mt-10">
            <MultiImgCardComponent top={top} genre="" img="images/img.jpg"/>
            <MultiImgCardComponent top={top} genre="" img="images/img.jpg"/>
            <MultiImgCardComponent top={top} genre="" img="images/img.jpg"/>
            <MultiImgCardComponent top={top} genre="" img="images/img.jpg"/>
            <MultiImgCardComponent top={top} genre="" img="images/img.jpg"/>
            <MultiImgCardComponent top={top} genre="" img="images/img.jpg"/>
            <MultiImgCardComponent top={top} genre="" img="images/img.jpg"/>
            <MultiImgCardComponent top={top} genre="" img="images/img.jpg"/>
            <MultiImgCardComponent top={top} genre="" img="images/img.jpg"/>
        </div>
    )
}

export default ListComponents
