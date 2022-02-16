import React from 'react'
import { ZebraSVG } from './assets/Zebra.js';
import { LeopardSVG } from './assets/Leopard.js';
import { BoababSVG } from './assets/Boabab.js';
import { AcaciaSVG } from './assets/Acacia.js';
import { ElephantGrassSVG } from './assets/ElephantGrass.js';

class sticker{
    constructor(name, posx, posy, color, class_name="animal", size=20, children=[]) {
        this.name = name;
        this.posx = posx;
        this.posy = posy;
        this.color = color;
        this.class_name = class_name;
        this.size = size;
        this.children = children;
    }
    get pos(){
        return([this.posx, this.posy, this.size])
    }
    get stickerStyle() {
        return(
            {
                width: String(this.size) + "%",
                height: String(this.size) + "%",
                position:"absolute",
                left: String(this.posx) + "%",
                top: String(this.posy) + "%"
            }
        )
    }
}

export class Zebra extends sticker{
    sticker(stickerStyles) {
        return(
            <ZebraSVG 
                key={this.name} 
                class_name={this.class_name} 
                defaultColor={this.color}
                name={this.name}
                stickerStyle={this.stickerStyle}
                childrenStickers={this.children}
                stickerStyles={stickerStyles}
            />
        )
    }
}

export class Leopard extends sticker{
    sticker(stickerStyles) {
        return( 
            <LeopardSVG 
                key={this.name} 
                class_name={this.class_name} 
                defaultColor={this.color} 
                name={this.name} 
                stickerStyle={this.stickerStyle} 
                childrenStickers={this.children}
                stickerStyles={stickerStyles}
            />
        )
    }
}

export class Boabab extends sticker{
    sticker(stickerStyles) {
        return( 
            <BoababSVG 
            key={this.name} 
            class_name ={this.class_name} 
            defaultColor={this.color} 
            name={this.name} 
            stickerStyle={this.stickerStyle}
            childrenStickers={this.children}
            stickerStyles={stickerStyles}
        />
        )
    }
}

export class Acacia extends sticker{
    sticker(stickerStyles) {
        return( 
            <AcaciaSVG 
                key={this.name} 
                class_name ={this.class_name} 
                defaultColor={this.color} 
                name={this.name} 
                stickerStyle={this.stickerStyle}
                childrenStickers={this.children}
                stickerStyles={stickerStyles}
            />
        )
    }
}

export class ElephantGrass extends sticker{
    sticker(stickerStyles) {
        return( 
            <ElephantGrassSVG 
                key={this.name} 
                class_name ={this.class_name} 
                defaultColor={this.color} 
                name={this.name} 
                stickerStyle={this.stickerStyle}
                childrenStickers={this.children}
                stickerStyles={stickerStyles}
            />
        )
    }
}

// export class LeopardFam extends sticker{
//     sticker(fill) {
//         return( 
//             <LeopardFamSVG key={this.name} class_name ={this.class_name} fillColor={this.color} name = {this.name} stickerStyle={this.stickerStyle} children = {this.children} pos = {this.pos}/>
//         )
//     }
// }

// helper functions

export function childPos(parentX, parentY, parentSize, angle) {
    return [String(parentX + 17*Math.cos(angle) + parentSize/4),
    String(parentY - 17*Math.sin(angle) + parentSize/4)]
}

export function childSize(parentSize) {
    return String(parentSize/2)
}

export function getStickerColor(stickerStyles, stickerName) {
    if (stickerName in stickerStyles && stickerStyles[stickerName] !== 'rgb(0, 0, 0)') {
        return stickerStyles[stickerName];
    } else {
        return null;
    }
} 

// export class Family extends sticker{
//     get sticker() {
//         return( 
//             <ElephantGrassSVG key={this.name} class_name ={this.class_name} fillColor={this.color} name = {this.name} stickerStyle={this.stickerStyle}>
//                 <LeopardSVG key={this.name} class_name={this.class_name} fillColor={this.color} name = {this.name} stickerStyle={this.stickerStyle}/>
//             </ElephantGrassSVG>
//         )
//     }
// }