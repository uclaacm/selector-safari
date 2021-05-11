import React from 'react'

export default function Build (props){
    let boardDim = "calc(100vh - 70px)";
    let boardStyle = {
        backgroundColor: "var(--main-bg-color)",
        height: boardDim,
        width: boardDim,
        position:"sticky",
        margin: "0 auto"
    }

    const setStickerColor = sticker => {
        if (sticker.name in props.stickerStyles && props.stickerStyles[sticker.name] !== 'rgb(0, 0, 0)') {
          return props.stickerStyles[sticker.name]
        } else {
          return sticker.color;
        }
      }

    return (
        <div id="Board" style={boardStyle} ref={props.setRef}>
            {
                props.level.gamepieces.map((z)=>{
                    return(
                        z.sticker(setStickerColor(z))
                    )
                } )
            }
        </div>
    )
}