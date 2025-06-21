import MultiImgCardComponent from "./MultiImgCardComponent"

function ListComponents() {
    return (
        <div className="flex overflow-x-auto space-x-4 mt-10">
            <MultiImgCardComponent img="images/img.jpg"/>
            <MultiImgCardComponent img="images/img.jpg"/>
            <MultiImgCardComponent img="images/img.jpg"/>
            <MultiImgCardComponent img="images/img.jpg"/>
            <MultiImgCardComponent img="images/img.jpg"/>
            <MultiImgCardComponent img="images/img.jpg"/>
            <MultiImgCardComponent img="images/img.jpg"/>
            <MultiImgCardComponent img="images/img.jpg"/>
            <MultiImgCardComponent img="images/img.jpg"/>

        </div>
    )
}

export default ListComponents
