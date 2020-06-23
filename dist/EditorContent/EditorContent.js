import React from 'react';
import "./EditorContent.css";

var EditorContent = function EditorContent(props) {
  var content = props.content,
      inline = props.inline;
  var className = "ql-editor LernaRTEContent";

  if (inline) {
    className += " LernaRTEContent--Inline";
  }

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "ql-editor",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }));
};

export default EditorContent;