import React, {useState} from "react";
import "./Tabs.css";
import Textbox from "../Textbox/Textbox";
import { levels } from "../../components/levels";

function Tabs(props) {
    const [currentTab, setCurrentTab] = useState("tab1");

    console.log(props.level); 
    let htmlContent;

    if (props.level == 1) {
        htmlContent = 
        <div className="HTML-text">
            <p>&#60;zebra id="zaira"/&#62;</p>
            <p>&#60;zebra id="zed"/&#62;</p>
            <p>&#60;zebra id="zenifer"/&#62;</p>
        </div>

    } else if (props.level == 2) {
        htmlContent =
        <div className="HTML-text">
            <p>&#60;leopard id="Leonard"/&#62;</p>
            <p>&#60;leopard id="Lily"/&#62;</p>
        </div>

    } else if (props.level == 3) {
        htmlContent =
        <div className="HTML-text">
            <p>&#60;boabab id="Bob"/&#62;</p>
            <p>&#60;boabab id="Bill"/&#62;</p>
            <p>&#60;acacia id="Ace"/&#62;</p>
            <p>&#60;acacia id="Aiden"/&#62;</p>
            <p>&#60;acacia id="Alicia"/&#62;</p>
            <p>&#60;elephentgrass id="Edward"/&#62;</p>
            <p>&#60;elephentgrass id="Elizabeth"/&#62;</p>
            <p>&#60;elephentgrass id="Ella"/&#62;</p>
            <p>&#60;elephentgrass id="Eduardo"/&#62;</p>
            <p>&#60;zebra id="zaira"/&#62;</p>
        </div>

    } else if (props.level == 4) {
        htmlContent =
        <div className="HTML-text">
            <p>&#60;elephentgrass id="Edward"/&#62;</p>
            <p>&#60;elephentgrass id="Elizabeth"/&#62;</p>
            <p>&#60;elephentgrass id="Ella"/&#62;</p>
            <p>&#60;elephentgrass id="Eduardo"/&#62;</p>
            <p>&#60;zebra id="zaira"/&#62;</p>
            <p>&#60;zebra id="zed"/&#62;</p> 
            <p>&#60;leopard id="lilly"/&#62;</p>           
        </div> 

    } else if (props.level == 5) {
        htmlContent =
        <div className="HTML-text">
            <p>&#60;leopard id="Lisa"/&#62;</p>
                <div>
                    <p>&#60;leopard id="Leon"/&#62;</p>
                    <p>&#60;leopard id="Lilly"/&#62;</p>
                    <p>&#60;zebra class="animal"/&#62;</p>
                </div>
            <p>&#60;zebra id="zelly"/&#62;</p>
            <p>&#60;zebra id="zoob"/&#62;</p>        
            <p>&#60;acacia id="Ace"/&#62;</p>
            <p>&#60;acacia id="Aiden"/&#62;</p>     
        </div>

    }

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
                htmlContent
            )
        }
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