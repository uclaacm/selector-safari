import React from 'react'

export default function Build (props){
    let boardStyle = {
        backgroundColor:"#EAD87A",
        height:"100vh",
        width:"100vh",
        position:"sticky",
        left: props.left,
        top: props.top,
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