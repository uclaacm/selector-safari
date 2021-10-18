import React, { useState } from "react";
import styled from "styled-components";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";
import "prismjs/themes/prism.css";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: left;
  position: relative;
  margin: 2em 30px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 25px;
`;

function Textbox(props) {
  const [code, setCode] = useState(
    localStorage.getItem(`level-${props.level}-code`) ?? `/* Type code here */`
  );

  const handleValueChange = (code) => {
    setCode(code);
    props.onValueChange(code);
    localStorage.setItem(`level-${props.level}-code`, code);
  };

  return (
    <Container>
      <Editor
        value={code}
        onValueChange={(code) => handleValueChange(code)}
        highlight={(code) => highlight(code, languages.css)}
        padding={10}
        style={{
          fontFamily: '"Source Code Pro", monospace',
          fontSize: 15,
        }}
      />
    </Container>
  );
}

export default Textbox;
