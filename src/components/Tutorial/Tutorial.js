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
}`,
    `#Lisa #Leon{
        color: (150, 255, 255);
    }
}`,
]

const text = [
    <div> 
        The ID selector allows you to select an element based on its id. Each element should have a unique id, like a name.
        When you use the id selector it’s like you’re asking someone to do something. For example, “George, I dare you to eat this chili pepper!”
        <br/><br/>
        In HTML, elements are given an id by using this syntax:
        <div className="code-text"> 
            &lt;div id = “George”&gt;&lt;/div&gt; 
        </div> 
        <br/>
        In CSS, you can select an id by using the # symbol:
        <div className="code-text">
            {css[0]}
        </div>
        This will turn the element George a nice bright shade of red because they’ve just eaten a chili pepper!
    </div>,
    <div> 
        The Type selector allows you to select an element by its type. In selector safari the type of sticker will be its species. 
        Generally in HTML, an elements type is the word that comes after the first “&lt;”.
        <br/><br/>
        For example the type of:
        <div> 
            <span className="code-text">&lt;div&gt;George&lt;/div&gt;</span> is a div<br></br>
            <span className="code-text">&lt;p&gt; desperately needs milk &lt;/p&gt;</span> is a p<br></br>
            <span className="code-text">&lt;Zebra/&gt;</span> is a Zebra
        </div> 
        <br/>
        In CSS, you can select a type by writing the type name:
        <div className="code-text">
            {css[1]}
        </div>
        This CSS will turn all Zebras a deep shade of purple!
    </div>,
    <div>
        The class selector allows you to select elements by the class they have been given. 
        Classes are useful because they can used to describe many elements in HTML the same way. 
        In selector Safari classes will group stickers together over where they get their energy!
        <br/><br/>
        In HTML, elements are given a class by using this syntax:
        <div className="code-text">
            &lt;div class = “chiliEater”&gt;George sips his milk&lt;/div&gt;
        </div>
        <br/>
        You can even give an element multiple classes, like how you can describe something many ways, by putting a space between class names. 
        <div className="code-text">
            &lt;Baboon class = “herbivore carnivore”/&gt;
        </div>
        <br/>
        In CSS, you can select a class by using a ".".
        <div className="code-text">
            {css[2]}
        </div>
        This CSS will turn all elements with the class animal turquoise!
    </div>,
    <div>
        What happens when you want to give elements that don’t share a type or class the same style using one selector? 
        You can use the list selector! The list selector takes any of the selectors you’ve already learned about. 
        All you need to do is separate your selectors with commas:
        <br/><br/>
        <div className="code-text">
            {css[3]}
        </div>
        <br/>
        Will turn the element George, all elements with the class animal, and Zebras mango orange!
    </div>,
    <div>
        A common way to organize HTML elements is by making an element a descendant of another. What does that mean? Take a look at the HTML below. Notice that Lisa the Leopard's HTML tag doesn't close until after two Leopards and a Zebra are declared within it. You can tell because of the Leopard closing tag (with the <b>/&gt;</b>) underneath the Zebra tag, which matches Lisa the Leopard's opening tag.
        <br/><br/>
        Notice that the indented HTML tags underneath Lisa are the descendant elements of Lisa. Indenting descendants is good practice. When you see indented HTML tags, it's a clue that you're probably working with descendants!
        <br/><br/>
        Now, how do we specify that we want to style a descendant in CSS? Let's explore this with our current level.
        <br/><br/>
        Notice that Leon the Leopard is a descendant of Lisa the Leopard. Say we want to style Leon to be a bright blue. To style Leon in CSS, we first write a selector for Leon's parent. Then, just write a space after this selector and write a selector for Leon:

        <br/><br/>
        <div className="code-text">
            {css[4]}
        </div>
        <br/>
        This CSS turns the element Leon a sky blue!
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
