import * as stickers from './Stickers.js';
import { childPos, childSize } from './Stickers.js';
import Hex from './Hex/Hex.js'
import React from 'react';

export let levels = [{
    level: 1,
    title: "ID",
    instructions: "Zebras pride themselves in their unique pattern of stripes. Unfortunately all of your sticker zebras showed up to the safari with the same pattern of stripes. Using the ID selector and CSS color property, make your zebras feel unique by giving them different colors!",
    link: "https://www.nationalgeographic.com/animals/mammals/p/plains-zebra/",
    gamepieces: [
        new stickers.Zebra('zaira', 50, 20, "#fffcf5", "zebra"), 
        new stickers.Zebra('zed', 10, 50, "#fffcf5", "zebra"), 
        new stickers.Zebra('zenifer', 60, 60, "#fffcf5", "zebra")
    ],
    backgroundColor: "default",
    tutorialText: `The ID selector allows you to select an element based on its id. Each element should have a unique id, like a name. When you use the id selector it’s like you’re asking someone to do something. For example, “George, I dare you to eat this chili pepper!”

In HTML, elements are given an id by using this syntax:
<div id = “George”></div>

In CSS, you can select an id by using the # symbol:
#George {
        color: rgb(255, 0, 0);
}
This will turn the element George a nice bright shade of red because they’ve just eaten a chili pepper!.`,
},
{
    level: 2,
    title: "Type",
    instructions: <p>Leopards are very secretive cats which means they don’t want to give away their names! Coincidentally, they also are very shy cats and want to blend into their surroundings. Help out your sticker leopards by changing their color to match their surroundings <Hex hexcode="#EAD87A"/></p>, //#F3C94F?
    link: "https://www.nationalgeographic.com/animals/mammals/facts/leopard",
    gamepieces: [
        new stickers.Leopard('Leonard', 10, 10, "lightblue", "leopard", null),
        new stickers.Leopard('Lily', 50, 10, "pink", "leopard", null),
    ],
    backgroundColor: "default",
    tutorialText: `The Type selector allows you to select an element by its type. In selector safari the type of sticker will be its species. Generally in HTML, an elements type is the word that comes after the first “<”.

For example the type of:
<div>George</div> is a div
<p> desperately needs milk </p> is a p
<Zebra/> is a Zebra

In CSS, you can select a type by writing the type name:
Zebra {
        color: rgb(100, 0, 100);
}
This CSS will turn all Zebras a deep shade of purple!`,
},
{
    level: 3,
    title: "Class",
    instructions: <p>It looks like this part of your safari has had a fire recently and your zebras have nothing to eat. Turn the safari green <Hex hexcode="#306230"/> again to make sure your animals are well fed.</p>,
    gamepieces: [
        new stickers.Boabab('Bob', 10, 30, "#1d0b08", "boabab", "plant"),
        new stickers.Boabab('Bill', 65, 75, "#1d0b08", "boabab", "plant"),
        new stickers.Acacia('Ace', 10, 5, "#1d0b08", "acadia", "plant"),
        new stickers.Acacia('Aiden', 15, 50, "#1d0b08", "acacia", "plant"),
        new stickers.Acacia('Alicia', 30, 40, "#1d0b08", "acacia", "plant"),
        new stickers.ElephantGrass('Edward', 78, 6, "#1d0b08", "elephantgrass", "plant"),
        new stickers.ElephantGrass('Elizabeth', 50, 12, "#1d0b08", "elephantgrass", "plant"),
        new stickers.ElephantGrass('Ella', 65, 40, "#1d0b08", "elephantgrass", "plant"),
        new stickers.ElephantGrass('Eduardo', 10, 75, "#1d0b08", "elephantgrass", "plant"),
        new stickers.Zebra('zaira', 50, 50, "#fffcf5", "zebra")
    ],
    backgroundColor: "default",
    tutorialText: `The class selector allows you to select elements by the class they have been given. Classes are useful because they can used to describe many elements in HTML the same way. In selector Safari classes will group stickers together over where they get their energy!

In HTML, elements are given a class by using this syntax:
<div class = “chiliEater”>George sips his milk</div

You can even give an element multiple classes, like how you can describe something many ways, by putting a space between class names. 
<Baboon class = “herbivore carnivore”/>

In CSS, you can select a class by using a “ . “.
.animal {
        color: rgb(0, 200, 150);
}
This CSS will turn all elements with the class animal turquoise!`,
},
{
    level: 4,
    title: "List",
    instructions: <p>Oh no! your zebras are all the same color,  the grass they want to eat is all yellow, and your leopards don’t blend in with their environment <Hex hexcode="#306230"/>. You’ve got a lot of work cut out for you but it seems your selector 9000 only has enough juice for you to use one selector and one css property to work with.</p>,
    gamepieces: [
        new stickers.ElephantGrass('Edward', 78, 6, "#EAD87A", "elephantgrass", "plant"),
        new stickers.ElephantGrass('Elizabeth', 50, 12, "#EAD87A", "elephantgrass", "plant"),
        new stickers.ElephantGrass('Ella', 65, 40, "#EAD87A", "elephantgrass", "plant"),
        new stickers.ElephantGrass('Eduardo', 10, 75, "#EAD87A", "elephantgrass", "plant"),
        new stickers.Zebra('zaira', 20, 30, "#fffcf5", "zebra"),
        new stickers.Zebra('zed', 5, 10, "#fffcf5", "zebra"),
        new stickers.Leopard("lilly", 65, 75, "pink", "leopard")
    ],
    backgroundColor: "rgb(48, 98, 48)",
    tutorialText: `What happens when you want to give elements that don’t share a type or class the same style using one selector? You can use the list selector! The list selector takes any of the selectors you’ve already learned about. All you need to do is separate your selectors with commas:

#George, .animal, Zebra {
        color: (255, 200, 100);
}

Will turn the element George, all elements with the class animal, and Zebras mango orange!`,
},
{
    level: 5,
    title: "Descendant",
    instructions: "It looks like Lezlie the leopard has decided to adopt a baby zebra in her family. Lezlie hasn’t decided on a name for the zebra yet so it looks like they’re missing an id tag. Remember that your zebras should have unique colors so you’ll need to change the color of this zebra using the descendant selector.",
    gamepieces: [
        new stickers.Leopard("Lisa", 60, 50, "lightblue", "leopard", "animal", 20, [
            new stickers.Leopard("Leon", ...childPos(60, 50, 20, -0.85), "purple", "leopard", "animal", childSize(20)),
            new stickers.Leopard("Lilly", ...childPos(60, 50, 20, 3.84), "pink", "leopard", "animal", childSize(20)),
            new stickers.Zebra(null, ...childPos(60, 50, 20, 4.71), "#EAD87A", "zebra", "animal", childSize(20))
        ]),
        new stickers.Zebra('zelly', 10, 30, "#EAD87A", "zebra"),
        new stickers.Zebra('zoob', 20, 10, "#EAD87A", "zebra"),
        new stickers.Acacia('Ace', 50, 5, "#8cb07d", "acacia", "plant", 40),
        new stickers.Acacia('Aiden', 10, 60, "#8cb07d", "acacia", "plant", 40),
    ],
    backgroundColor: "default",
    tutorialText: `TODO: descendant combinator tutorial`,
}
]



