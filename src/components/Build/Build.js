import React from 'react'

export default function Build (props){
    let boardDim = "calc(100vh - 70px)";
    let boardStyle = {
        backgroundColor: "var(--main-bg-color)",
        height: boardDim,
        width: boardDim,
        position:"sticky",
    }
    return (
        <div id = "Board" style = {boardStyle} ref={props.setRef}>
            {
                props.level.gamepieces.map((z)=>{
                    return(
                        z.sticker
                    )
                } )
            }
        </div>
    )
}