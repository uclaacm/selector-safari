import React, { useState, useEffect } from 'react';

function Hex(props) {
    const [isCopied, setIsCopied] = useState(false);
    const [textStyle, setTextStyle] = useState();

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

    function hoverFocus(e) {
        setTextStyle({ cursor: "pointer" });
    }

    function handleClick(e) {
        navigator.clipboard.writeText(props.hexcode);
        setIsCopied(true);
    }

    return (
        <span>
            <text className="hex-code" onMouseOver={hoverFocus} onClick={handleClick} style={{ color: props.hexcode, ...textStyle }}>({isCopied ? "Copied!" : props.hexcode})</text>
        </span>
    );
}

export default Hex;
