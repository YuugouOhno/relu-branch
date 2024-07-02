// src/FixedButton.js
import React from 'react';

function FixedButton() {
  return (
    <div className="z-30 fixed top-4 right-4">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfixCWv-gs-M7WPIsVYrdKgZFC6hXvMep3MjM6xuxYFCjJQkw/viewform"
        className="bg-c-green-orange bg-red-400 text-white py-2 px-4 rounded hover:bg-blue-400"
        target="_blank">
        お申し込みはこちら！！
      </a>
    </div>
  );
}

export default FixedButton;