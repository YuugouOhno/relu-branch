// src/FixedButton.js
import React from 'react';

function FormButton() {
  return (
    <div className="z-30 md:top-4 bottom-4 right-4 pointer-events-none">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfixCWv-gs-M7WPIsVYrdKgZFC6hXvMep3MjM6xuxYFCjJQkw/viewform"
        className="pointer-events-auto bg-orange-500 py-4 px-8 rounded hover:bg-blue-400"
        target="_blank">
        お申し込みはこちら！！
      </a>
    </div>
  );
}

export default FormButton;