import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Example() {
  const [value, setValue] = useState('');

  return (
    <ReactQuill
      theme="snow"
      placeholder="请输入..."
      value={value}
      onChange={setValue}
    />
  );
}
