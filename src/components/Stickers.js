import React from 'react'
import { ZebraSVG } from './assets/Zebra.js';
import { LeopardSVG } from './assets/Leopard.js';
import { BoababSVG } from './assets/Boabab.js';
import { AcaciaSVG } from './assets/Acacia.js';
import { ElephantGrassSVG } from './assets/ElephantGrass.js';
import { LeopardFamSVG } from './assets/LeopardFam.js';

class sticker{
    constructor(name,posx,posy,color, class_name= "animal", size = 20) {
        this.name = name;
        this.posx = posx;
        this.posy = posy;
        this.color = color;
        this.class_name = class_name;
        this.size = size;
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

class Family extends sticker{
    constructor(children){
        super();
        this.children = children;
    }

}

export class Zebra extends sticker{
    get sticker() {
        return( 
            <ZebraSVG key={this.name} class_name={this.class_name} fillColor={this.color} name = {this.name} stickerStyle={this.stickerStyle}/>
        )
    }
}

export class Leopard extends sticker{
    get sticker() {
        return( 
            <LeopardSVG key={this.name} class_name={this.class_name} fillColor={this.color} name = {this.name} stickerStyle={this.stickerStyle}/>
        )
    }
}

export class Boabab extends sticker{
    get sticker() {
        return( 
            <BoababSVG key={this.name} class_name ={this.class_name} fillColor={this.color} name = {this.name} stickerStyle={this.stickerStyle}/>
        )
    }
}

export class Acacia extends sticker{
    get sticker() {
        return( 
            <AcaciaSVG key={this.name} class_name ={this.class_name} fillColor={this.color} name = {this.name} stickerStyle={this.stickerStyle}/>
        )
    }
}

export class ElephantGrass extends sticker{
    get sticker() {
        return( 
            <ElephantGrassSVG key={this.name} class_name ={this.class_name} fillColor={this.color} name = {this.name} stickerStyle={this.stickerStyle}/>
        )
    }
}

export class LeopardFam extends sticker{
    get sticker() {
        return( 
            <LeopardFamSVG key={this.name} class_name ={this.class_name} fillColor={this.color} name = {this.name} stickerStyle={this.stickerStyle} children = {this.children} pos = {this.pos}/>
        )
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