import React, {useState} from "react";
import "./Tabs.css";
import Textbox from "../Textbox/Textbox";
import {levels} from "../levels.js"

function Tabs(props) {
    const [currentTab, setCurrentTab] = useState("tab1");

    /* htmlContentArray formatting: element 1 - component name, element 2 - component id, 
    element 3 - number of children */
    let htmlContentArray = [];

    levels[props.level - 1].gamepieces.forEach((gamepiece) => {

        /*
        // Declare elements that don't have children as a child themselves (for easier formatting)
        let isChild;
        if(gamepiece.children.length){
            isChild = false;  // Only elements with actual children will be considered parents (instead of elements that don't have children being considered parents too) for the purposes of generating the HTML code
        }else{
            isChild = true;
        }
        */

        htmlContentArray.push([gamepiece.constructor.name, gamepiece.name, gamepiece.class_name, gamepiece.children.length]);

        // This part adds all children element of a parent
        if (gamepiece.children) {
            gamepiece.children.forEach((child) => {
                htmlContentArray.push([child.constructor.name, child.name, gamepiece.class_name, -1]); // Use -1 as an indicator of being a true child (no children but is a child of something else)
            })} 
        
        // If this gamepiece was an actual parent, add a closing tag in the HTML now
        if(gamepiece.children.length > 0){
            htmlContentArray.push([gamepiece.constructor.name, "", "", -2]); // Add a closing tag for parent. Use -2 as a signal for a closing tag
        }
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
                        if (element[3] === -1)
                            styling = 'children';
                        else
                            styling = 'parent';
                        // check if current sticker has an id and set content accordingly
                        if (element[1] === null) 
                            return (<p className={styling}>&#60;{element[0]} class="{element[2]}"{element[3] <= 0 && <txt>/</txt>}&#62;</p>);
                        else 
                            return (<p className={styling}>&#60;{element[0]} {(element[3] !== -2) && <txt>id="{element[1]}" class="{element[2]}"</txt>}{element[3] <= 0 && <txt>/</txt>}&#62;</p>);
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