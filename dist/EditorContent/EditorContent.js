import React from 'react';
import "./EditorContent.css";

var EditorContent = function EditorContent(props) {
  var content = props.content;
  return /*#__PURE__*/React.createElement("div", {
    className: "ql-editor LernaRTEContent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ql-editor",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }));
};

export default EditorContent;