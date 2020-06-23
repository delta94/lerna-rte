import React from 'react';
import PropTypes from 'prop-types';
import "./EditorContent.css";

const EditorContent = props => {
    const { content, inline } = props;

    let className = "ql-editor LernaRTEContent";
    if (inline) {
        className += " LernaRTEContent--Inline"
    }

    return (
        <div className={className}>
            <div className={"ql-editor"} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

EditorContent.propTypes = {
    content: PropTypes.string.isRequired,
    inline: PropTypes.bool
};

export default EditorContent;