import React from 'react';
import './Tutorial.css';

const css = [
    `#George {
        color: rgb(255, 0, 0);
}`,
    `Zebra {
        color: rgb(100, 0, 100);
}`,
    `.animal {
        color: rgb(0, 200, 150);
}`,
    `#George, .animal, Zebra {
        color: (255, 200, 100);
}`
]

const text = [
    <div> 
        The ID selector allows you to select an element based on its id. Each element should have a unique id, like a name. When you use the id selector it’s like you’re asking someone to do something. For example, “George, I dare you to eat this chili pepper!”
        <br></br><br></br>
        In HTML, elements are given an id by using this syntax:
        <div className="code-text"> 
            &lt;div id = “George”&gt;&lt;/div&gt; 
        </div> 
        <br></br>
        In CSS, you can select an id by using the # symbol:
        <div className="code-text">
            {css[0]}
        </div>
        This will turn the element George a nice bright shade of red because they’ve just eaten a chili pepper!
    </div>,
    <div> 
        The Type selector allows you to select an element by its type. In selector safari the type of sticker will be its species. Generally in HTML, an elements type is the word that comes after the first “&lt”.
        <br></br><br></br>
        For example the type of:
        <div> 
            <span className="code-text">&lt;div&gt;George&lt;/div&gt;</span> is a div<br></br>
            <span className="code-text">&lt;p&gt; desperately needs milk &lt;/p&gt;</span> is a p<br></br>
            <span className="code-text">&lt;Zebra/&gt;</span> is a Zebra
        </div> 
        <br></br>
        In CSS, you can select a type by writing the type name:
        <div className="code-text">
            {css[1]}
        </div>
        This CSS will turn all Zebras a deep shade of purple!
    </div>,
    <div>
        The class selector allows you to select elements by the class they have been given. Classes are useful because they can used to describe many elements in HTML the same way. In selector Safari classes will group stickers together over where they get their energy!
        <br></br><br></br>
        In HTML, elements are given a class by using this syntax:
        <div className="code-text">
            &lt;div class = “chiliEater”&gt;George sips his milk&lt;/div&gt;
        </div>
        <br></br>
        You can even give an element multiple classes, like how you can describe something many ways, by putting a space between class names. 
        <div className="code-text">
            &lt;Baboon class = “herbivore carnivore”/&gt;
        </div>
        <br></br>
        In CSS, you can select a class by using a ".".
        <div className="code-text">
            {css[2]}
        </div>
        This CSS will turn all elements with the class animal turquoise!
    </div>,
    <div>
        What happens when you want to give elements that don’t share a type or class the same style using one selector? You can use the list selector! The list selector takes any of the selectors you’ve already learned about. All you need to do is separate your selectors with commas:
        <br></br><br></br>
        <div className="code-text">
            {css[3]}
        </div>
        <br></br>
        Will turn the element George, all elements with the class animal, and Zebras mango orange!
    </div>,
    <div>
        TODO: descendant combinator tutorial
    </div>
]

const Tutorial = ({
    level: {
        level,
        title,
    },
}) => (
    <div className="tutorial-container">
        <span className="subtitle"> {`${title} Selector Tutorial`} </span>
        <div className="tutorial-text">
            {text[level - 1]}
        </div>
    </div>
);

export default Tutorial;
