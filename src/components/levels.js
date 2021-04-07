import * as stickers from './Stickers.js'

export let levels = [{
    level: 1,
    title: "ID",
    instructions: "Zebras pride themselves in their unique pattern of stripes. Unfourtunatly all of your sticker zebras showed up to the safari with the same pattern of stripes. Make your zebras feel unique by giving them different colors!",
    link: "https://www.nationalgeographic.com/animals/mammals/p/plains-zebra/",
    gamepeices: [
        new stickers.Zebra('zaira', 50, 20, "#F9F3D6"), 
        new stickers.Zebra('zed', 10, 50, "#F9F3D6"), 
        new stickers.Zebra('zenifer', 60, 60, "#F9F3D6")
    ]
},
{
    level: 2,
    title: "Type",
    instructions: "Leopards are very secretive cats which means they don’t want to give away their names! Coincidentally, they also are very shy cats and want to blend into their surroundings. Help out your sticker leopards by changing their color to match their surroundings (#F3C94F)",
    link: "https://www.nationalgeographic.com/animals/mammals/facts/leopard",
    gamepeices: [
        new stickers.Leopard('Leonard', 10, 10, "lightblue"),
        new stickers.Leopard('Lily', 50, 10, "pink")
    ]
},
{
    level: 3,
    title: "Class",
    instructions: "It looks like this part of your safari has had a fire recently and your zebras have nothing to eat. Turn the safari green again to make sure your animals are well fed.",
    gamepeices: [
        new stickers.Boabab('Bob', 10, 30, "#1d0b08"),
        new stickers.Boabab('Bill', 65, 75, "#1d0b08"),
        new stickers.Acacia('Ace', 10, 5, "#1d0b08"),
        new stickers.Acacia('Aiden', 15, 50, "#1d0b08"),
        new stickers.Acacia('Alicia', 30, 40, "#1d0b08"),
        new stickers.ElephantGrass('Edward', 78, 6, "#1d0b08"),
        new stickers.ElephantGrass('Elizabeth', 50, 12, "#1d0b08"),
        new stickers.ElephantGrass('Ella', 65, 40, "#1d0b08"),
        new stickers.ElephantGrass('Eduardo', 10, 75, "#1d0b08"),
        new stickers.Zebra('zaira', 50, 50, "#EEEAD5")
    ]
},
{
    level: 4,
    title: "List",
    instructions: "Oh no! your zebras are all the same color,  the grass they want to eat is all yellow, and your leopards don’t blend in with their environment. You’ve got a lot of work cut out for you but it seems your selector 9000 only has enough juice for you to use one selector and one css property to work with.",
    
    gamepeices: [
        new stickers.ElephantGrass('Edward', 78, 6, "#EAD87A"),
        new stickers.ElephantGrass('Elizabeth', 50, 12, "#EAD87A"),
        new stickers.ElephantGrass('Ella', 65, 40, "#EAD87A"),
        new stickers.ElephantGrass('Eduardo', 10, 75, "#EAD87A"),
        new stickers.Zebra('zaira', 20, 30, "#F9F3D6"),
        new stickers.Zebra('zed', 5, 10, "#F9F3D6"),
        new stickers.Leopard("lilly", 65, 75, "pink")
    ]
},
{
    level: 5,
    title: "Descendant",
    instructions: "Oh no! your zebras are all the same color,  the grass they want to eat is all yellow, and your leopards don’t blend in with their environment. You’ve got a lot of work cut out for you but it seems your selector 9000 only has enough juice for you to use one selector and one css property to work with.",
    
    gamepeices: [
        new stickers.ElephantGrass('Ella', 65, 40, "#EAD87A"),
    ] 
}
]



