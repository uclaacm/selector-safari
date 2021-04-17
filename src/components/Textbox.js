import React from "react";
import styled from 'styled-components';
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; 

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: left;
    position: relative;
    margin: auto;
    border: 1px solid black;
    border-radius: 20px;
    padding: 25px;
    width: 60%;
`;

function Textbox() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}
    //Insert tester code`
  );
  return (
    <Container> 
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    </Container>
  );
}

export default Textbox;