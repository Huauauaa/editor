import React, { useEffect, useState } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

console.log(BraftEditor);

export default function Example() {
  const [editorState, setEditorState] = useState(null);

  useEffect(async () => {
    const htmlContent = '<p>Blabla...</p>';
    // const htmlContent = await fetchEditorContent();

    setEditorState(BraftEditor.createEditorState(htmlContent));

    return () => {
      // cleanup
    };
  }, []);

  const submitContent = async () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = editorState.toHTML();
    // const result = await saveEditorContent(htmlContent);

    console.log(htmlContent);

    console.log(editorState);
  };

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className="my-component">
      <BraftEditor
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
    </div>
  );
}
