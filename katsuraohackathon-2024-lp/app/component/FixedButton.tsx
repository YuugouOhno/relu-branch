// src/FixedButton.js
import React from 'react';

function FixedButton() {
  return (
    <div className="z-30 fixed md:top-4 bottom-4 right-4 pointer-events-none">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfixCWv-gs-M7WPIsVYrdKgZFC6hXvMep3MjM6xuxYFCjJQkw/viewform"
        className="pointer-events-auto bg-c-green-orange bg-red-400 text-white py-2 px-4 rounded hover:bg-blue-400"
        target="_blank">
        お申し込みはこちら！！
      </a>
    </div>
  );
}

export default FixedButton;