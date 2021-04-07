import React from 'react'

export default function Build (props){
    let boardStyle = {
        backgroundColor:"#EAD87A",
        height:"100vh",
        width:"100vh",
        position:"fixed",
        left:"500px",
        top: props.top
    }
    return (
        <div id = "Board" style = {boardStyle}>
            {
                props.level.gamepeices.map((z)=>{
                    return(
                        z.sticker
                    )
                } )
            }
        </div>
    )
}