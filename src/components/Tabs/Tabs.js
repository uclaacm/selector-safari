import React, {useState} from "react";
import "./Tabs.css";
import Textbox from "../Textbox/Textbox";
import {levels} from "../levels.js"

function Tabs(props) {
    const [currentTab, setCurrentTab] = useState("tab1");

    /* htmlContentArray formatting: element 1 - component name, element 2 - component id, 
    element 3 - is the component a child? */
    let htmlContentArray = [];

    levels[props.level - 1].gamepieces.forEach((gamepiece) => {
        htmlContentArray.push([gamepiece.constructor.name, gamepiece.name, false]);
        if (gamepiece.children) {
            gamepiece.children.forEach((child) => {
                htmlContentArray.push([child.constructor.name, child.name, true]);
            })}
    });

    const tabList = [
        {
        name: 'tab1',
        label: 'CSS',
        content: (
            <Textbox
            level={props.level}
            onValueChange={props.onValueChange}
            key={props.key}
            />
        )},
        {
            name: 'tab2',
            label: 'HTML',
            content: (
            <div className='container'>
                <div className='HTML-text'>
                    {htmlContentArray.map((element) => {
                        let styling;
                        // check whether component is child or parent and applying styling accordingly
                        if (element[2] === true)
                            styling = 'children';
                        else
                            styling = 'parent';
                        // check if current sticker has an id and set content accordingly
                        if (element[1] === null) 
                            return (<p className={styling} onMouseOver={() => console.log("Hello!")}>
                                        &#60;{element[0]}/&#62;
                                    </p>);
                        else 
                            return (<p className={styling} onMouseOver={() => console.log("Hello!")}>
                                        &#60;{element[0]} id="{element[1]}"/&#62;
                                    </p>);
                    })}
                </div>
            </div>
        )}
    ]

    return (
        <div className="tab-container">
            <div className="button-container"> 
                {tabList.map((tab) => (
                    <button
                        onClick={() => setCurrentTab(tab.name)}
                        className={(tab.name === currentTab) ? "active-button" : "unactive-button"}
                        >
                            {tab.label}
                    </button>
                ))}
            </div>
            <div className="content">
                {tabList.map((tab) => 
                {if (tab.name === currentTab) 
                    return tab.content;
                else 
                    return null;
                })}    
            </div>
        </div>
    )
}

export default Tabs;