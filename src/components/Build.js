import { ReactComponent as Zebra } from './assets/Zebra.svg';

class Zebraa{
    constructor(name) {
        this.name = name;
    }
}

export function Build (props){

    let joe = Zebraa('joe')
    let jeff = Zebraa('jeff')
    let jerry = Zebraa('jerry')

    let level1 = {
        "zebra": [joe, jeff, jerry]
    }
    let level2 = {
        "zebra": 2
    }
    return (
        <div>
            {
                level1.zebra.map((z)=>{return <Zebra/>} )
            }
        </div>
    )
}