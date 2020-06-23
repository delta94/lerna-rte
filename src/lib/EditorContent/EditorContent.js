import React from 'react';
import PropTypes from 'prop-types';
import "./EditorContent.css";

const EditorContent = props => {
    const { content } = props;

    return (
        <div className={"ql-editor LernaRTEContent"}>
            <div className={"ql-editor"} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

EditorContent.propTypes = {
    content: PropTypes.string.isRequired,
};

export default EditorContent;