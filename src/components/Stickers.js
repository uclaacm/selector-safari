import React from 'react'
import { ZebraSVG } from './assets/Zebra.js';
import { LeopardSVG } from './assets/Leopard.js';
import { BoababSVG } from './assets/Boabab.js';
import { AcaciaSVG } from './assets/Acacia.js';
import { ElephantGrassSVG } from './assets/ElephantGrass.js';

class sticker{
    constructor(name,posx,posy,color, class_name= "animal") {
        this.name = name;
        this.posx = String(posx) + "%";
        this.posy = String(posy) + "%";
        this.color = color;
        this.class_name = class_name;
    }
    get stickerStyle() {
        return(
            {
                width: "20%", 
                height: "20%",
                position:"absolute",
                left: this.posx,
                top: this.posy
            }
        )
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

export class Family extends sticker{
    get sticker() {
        return( 
            <ElephantGrassSVG key={this.name} class_name ={this.class_name} fillColor={this.color} name = {this.name} stickerStyle={this.stickerStyle}>
                <LeopardSVG key={this.name} class_name={this.class_name} fillColor={this.color} name = {this.name} stickerStyle={this.stickerStyle}/>
            </ElephantGrassSVG>
        )
    }
}