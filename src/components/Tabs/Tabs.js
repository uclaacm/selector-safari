import React, {useState} from "react";
import "./Tabs.css";
import Textbox from "../Textbox/Textbox";
import { levels } from "../../components/levels";

// TODO: change tagList to props. tabList
function Tabs(props) {
    const [currentTab, setCurrentTab] = useState("tab1");

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
            )
        },
        {
            name: 'tab2',
            label: 'HTML',
            content: (
                <p>Testing!!!</p>
            )
        }
    ]

    return (
        <div className={(currentTab === 'tab1') ? 'CSS-active-background' : 'HTML-active-background'}>
            <div className="tabs"> 
                {tabList.map((tab) => (
                    <button
                        onClick={() => setCurrentTab(tab.name)}
                        className={(tab.name === {currentTab}) ? "active-button" : "unactive-button"}
                        >
                            {tab.label}
                    </button>
                ))}
            </div>
                {tabList.map((tab) => 
                {if (tab.name === currentTab) 
                    return tab.content;
                else 
                    return null;
                })}
        </div>
    )
}

export default Tabs;