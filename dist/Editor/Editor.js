import React from "react";
import ReactQuill from "react-quill";
import "./Editor.css";

var Editor = function Editor(props) {
  var value = props.value,
      onChange = props.onChange,
      placeholder = props.placeholder;

  function handleChange(html) {
    if (!onChange) {
      return;
    }

    onChange(html);
  }

  function getRenderValue(value) {
    if (value === undefined || value === null) {
      return null;
    }

    return value.html || value;
  }

  return /*#__PURE__*/React.createElement(ReactQuill, {
    className: "LernaRTE",
    value: getRenderValue(value),
    onChange: handleChange,
    modules: modules,
    formats: formats,
    placeholder: placeholder
  });
};

export default Editor;
var modules = {
  toolbar: [[{
    header: [1, 2, 3, 4, 5, 6, false]
  }], ["bold", "italic", "underline", "strike", "blockquote"], [{
    color: []
  }, {
    background: []
  }], [{
    script: "sub"
  }, {
    script: "super"
  }, "formula"], ["code", "code-block"], [{
    align: ""
  }, {
    align: "center"
  }, {
    align: "right"
  }, {
    align: "justify"
  }], [{
    list: "ordered"
  }, {
    list: "bullet"
  }, {
    indent: "-1"
  }, {
    indent: "+1"
  }], ["link", "image", "video"], ["clean"]]
};
var formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "color", "background", "script", "formula", "code", "code-block", "align", "list", "indent", "bullet", "link", "image", "video"];