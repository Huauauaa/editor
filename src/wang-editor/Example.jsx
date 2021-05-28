import React, { useState, useEffect } from 'react';
import E from 'wangeditor';

let editor = null;
export default function Example() {
  const [content, setContent] = useState('<p>blabla...</p>');

  useEffect(() => {
    editor = new E('#div1');

    editor.config.onchange = (newHtml) => {
      setContent(newHtml);
    };
    /**一定要创建 */
    editor.create();

    editor.txt.html(content);

    return () => {
      // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
      editor.destroy();
    };
  }, []);

  // 获取html方法1
  function getHtml() {
    console.log(content);
  }

  // 获取html方法2
  function getHtml1() {
    console.log(editor.txt.html());
  }

  // 获取text
  function getText() {
    console.log(editor.txt.text());
  }

  return (
    <div>
      <div id="div1"></div>

      <button onClick={getHtml}>获取html</button>
      <button onClick={getHtml1}>获取html1</button>
      <button onClick={getText}>获取text</button>
    </div>
  );
}
