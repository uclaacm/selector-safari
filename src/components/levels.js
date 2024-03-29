import * as stickers from './Stickers.js';
import { childPos, childSize } from './Stickers.js';
import Hex from './Hex/Hex.js'
import React from 'react';

export let levels = [{
    level: 1,
    title: "ID",
    instructions: "Zebras pride themselves in their unique pattern of stripes. Unfortunately, all of your sticker zebras showed up to the safari with the same pattern of stripes. Using the ID selector and CSS color property, make your zebras feel unique by giving them different colors!",
    link: "https://www.nationalgeographic.com/animals/mammals/p/plains-zebra/",
    gamepieces: [
        new stickers.Zebra('zaira', 50, 20, "#fffcf5"), 
        new stickers.Zebra('zed', 10, 50, "#fffcf5"), 
        new stickers.Zebra('zenifer', 60, 60, "#fffcf5")
    ],
    backgroundColor: "default",
},
{
    level: 2,
    title: "Type",
    instructions: <p>Leopards are very secretive cats which means they don’t want to give away their names! Coincidentally, they also are very shy cats and want to blend into their surroundings. Help out your sticker leopards by changing their color to match their surroundings <Hex hexcode="#EAD87A"/></p>, //#F3C94F?
    link: "https://www.nationalgeographic.com/animals/mammals/facts/leopard",
    gamepieces: [
        new stickers.Leopard('Leonard', 10, 10, "lightblue", null),
        new stickers.Leopard('Lily', 50, 10, "pink", null),
    ],
    backgroundColor: "default",
},
{
    level: 3,
    title: "Class",
    instructions: <p>It looks like this part of your safari has had a fire recently and your zebras have nothing to eat. Turn the safari green <Hex hexcode="#306230"/> again to make sure your animals are well fed.</p>,
    gamepieces: [
        new stickers.Boabab('Bob', 10, 30, "#1d0b08", "plant"),
        new stickers.Boabab('Bill', 65, 75, "#1d0b08", "plant"),
        new stickers.Acacia('Ace', 10, 5, "#1d0b08", "plant"),
        new stickers.Acacia('Aiden', 15, 50, "#1d0b08", "plant"),
        new stickers.Acacia('Alicia', 30, 40, "#1d0b08", "plant"),
        new stickers.ElephantGrass('Edward', 78, 6, "#1d0b08", "plant"),
        new stickers.ElephantGrass('Elizabeth', 50, 12, "#1d0b08", "plant"),
        new stickers.ElephantGrass('Ella', 65, 40, "#1d0b08", "plant"),
        new stickers.ElephantGrass('Eduardo', 10, 75, "#1d0b08", "plant"),
        new stickers.Zebra('zaira', 50, 50, "#fffcf5")
    ],
    backgroundColor: "default",
},
{
    level: 4,
    title: "List",
    instructions: <p>Oh no! Your zebras are all the same color,  the grass they want to eat is all yellow, and your leopards don’t blend in with their environment <Hex hexcode="#306230"/>. You’ve got a lot of work cut out for you but it seems your selector 9000 only has enough juice for you to use one selector and one CSS property to work with.</p>,
    gamepieces: [
        new stickers.ElephantGrass('Edward', 78, 6, "#EAD87A", "plant"),
        new stickers.ElephantGrass('Elizabeth', 50, 12, "#EAD87A", "plant"),
        new stickers.ElephantGrass('Ella', 65, 40, "#EAD87A", "plant"),
        new stickers.ElephantGrass('Eduardo', 10, 75, "#EAD87A", "plant"),
        new stickers.Zebra('zaira', 20, 30, "#fffcf5"),
        new stickers.Zebra('zed', 5, 10, "#fffcf5"),
        new stickers.Leopard("lilly", 65, 75, "pink")
    ],
    backgroundColor: "rgb(48, 98, 48)",
},
{
    level: 5,
    title: "Descendant",
    instructions: "It looks like Lezlie the leopard has decided to adopt a baby zebra in her family. Lezlie hasn’t decided on a name for the zebra yet, so it looks like they’re missing an id tag. Remember that your zebras should have unique colors, so you’ll need to change the color of this zebra using the descendant selector.",
    gamepieces: [
        new stickers.Leopard("Lisa", 60, 50, "lightblue", "animal", 20, [
            new stickers.Leopard("Leon", ...childPos(60, 50, 20, -0.85), "purple", "animal", childSize(20)),
            new stickers.Leopard("Lilly", ...childPos(60, 50, 20, 3.84), "pink", "animal", childSize(20)),
            new stickers.Zebra(null, ...childPos(60, 50, 20, 4.71), "#EAD87A", "animal", childSize(20))
        ]),
        new stickers.Zebra('zelly', 10, 30, "#EAD87A"),
        new stickers.Zebra('zoob', 20, 10, "#EAD87A"),
        new stickers.Acacia('Ace', 50, 5, "#8cb07d", "plant", 40),
        new stickers.Acacia('Aiden', 10, 60, "#8cb07d", "plant", 40),
    ],
    backgroundColor: "default",
}
]



