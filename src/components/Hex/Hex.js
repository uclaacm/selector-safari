import React, { useState, useEffect } from 'react';

function Hex(props) {
    const [isCopied, setIsCopied] = useState(false);
    const [textStyle, setTextStyle] = useState();

    useEffect(() => {
        if (isCopied) {
            setTextStyle({
                opacity: 0.2,
                transition: "all 2s"
            });
            setTimeout(() => { setIsCopied(false); }, 1000);
        } else {
            setTextStyle({
                opacity: 1
            });
        }
    }, [props.hexcode, isCopied]);

    function hoverFocus(e) {
        e.target.style.background = "dodgerblue";
        setTextStyle({ cursor: "pointer" });
    }

    function unfocus(e) {
        e.target.style.background = "none";
    }

    function handleClick(e) {
        navigator.clipboard.writeText(props.hexcode);
        setIsCopied(true);
    }

    return (
        <span>
            <text onMouseOver={hoverFocus} onMouseOut={unfocus} onClick={handleClick} style={{ color: props.hexcode, ...textStyle }}>({isCopied ? "Copied!" : props.hexcode})</text>
        </span>
    );
}

export default Hex;
