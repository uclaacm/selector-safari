import React, { useState, useEffect } from 'react';

function Hex(props) {
    const [isCopied, setIsCopied] = useState(false);
    const [textStyle, setTextStyle] = useState();
    const [showTooltip, setShowtooltip] = useState(localStorage.getItem("showTooltip"));

    useEffect(() => {
        if (isCopied) {
            setTextStyle({
                opacity: 0.2,
                transition: "all 2s",
            });
            setTimeout(() => setIsCopied(false), 1000);
        } else {
            setTextStyle({
                opacity: 1
            });
        }
    }, [props.hexcode, isCopied]);

    // Hover focus on the hexcode itself
    function hoverFocus(e) {
        setShowtooltip(localStorage.getItem("showTooltip")); // receive state update from localStorage, so that when user hovers once, we no longer show hex-code tooltip
        setTextStyle({ cursor: "pointer" });
    }

    function handleClick(e) {
        if (localStorage.getItem("showTooltip") === "false") { // don't let user copy hexcode until they hover over the tooltip first
            navigator.clipboard.writeText(props.hexcode);
            setIsCopied(true);
        }
    }

    return (
        <span>
            <text className={showTooltip} onMouseOver={hoverFocus} onClick={handleClick} style={{ color: props.hexcode, ...textStyle }}>({isCopied ? "Copied!" : props.hexcode})</text>
        </span>
    );
}

export default Hex;
