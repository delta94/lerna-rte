import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Editor, EditorContent} from "./lib";

ReactDOM.render(
  <React.StrictMode>
    <Editor />
    <EditorContent inline content={"<p>Hello</p>"}/>
  </React.StrictMode>,
  document.getElementById('root')
);