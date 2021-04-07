import React, {useState} from 'react';

function Editor(props) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
        props.onInputChange(e.target.value);
    }

    return (
        <div>
            <input type='text' value={input} onChange={handleChange}/>
        </div>
    );
}

export default Editor