import React, { useState } from 'react';
// tui
import { Editor } from '@toast-ui/react-editor';
// import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

const TuiEditor = () => {
  return (
    <>
      <Editor
        initialValue="hello react editor !!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </>
  );
};

export default TuiEditor;
