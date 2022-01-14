import React, {useState} from "react";
import "./Tabs.css";
import Textbox from "../Textbox/Textbox";


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
        <div className="tabs"> 
            {
                tabList.map((tab) => (
                    <button
                        onClick={() => setCurrentTab(tab.name)}
                        className={(tab.name === currentTab) ? "active" : ""}
                        >
                            {tab.label}
                    </button>
                ))
            }

            {
                tabList.map((tab) => 
                    {if (tab.name === currentTab) {
                        return (
                            tab.content
                        )
                    } else {
                        return (
                            null
                        )
                    }
                } 
                )
            }

            {() => {
                switch (currentTab) {
                    case 'tab1': 
                        return (
                            <Textbox
                            level={props.level}
                            onValueChange={props.onValueChange}
                            key={props.key}
                            />
                        )
                    case 'tab2':
                        return (
                            <p>Hello!</p>
                        )
                }
            }
            }


        </div>
    )
}

export default Tabs;