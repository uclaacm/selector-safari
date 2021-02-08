import React from 'react'

export default function Build (props){
    return (
        <div id = "Board" style = {{backgroundColor:"lightyellow",height:"800px", width:"800px", border: '2px solid black', position:"fixed", left:"500px", top:"50px"}}>
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