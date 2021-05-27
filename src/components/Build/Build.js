import React from 'react'

export default function Build (props){
    let backgroundColor = props.level.backgroundColor === "default" ? 
        "var(--main-bg-color)" : props.level.backgroundColor
    let boardStyle = {
        backgroundColor: backgroundColor,
        height: "calc(100vh - 70px)",
        width: '50%',
        position:"sticky",
        margin: "0 auto"
    }

    return (
        <div id="Board" style={boardStyle} ref={props.setRef}>
            {
                props.level.gamepieces.map((z)=>{
                    return(
                        z.sticker(props.stickerStyles)
                    )
                } )
            }
        </div>
    )
}