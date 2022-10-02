import "./App.css";
import React, { useState } from "react";

function Img(efek) {
  let sus = {
    imag: function () {
      if (efek) {
        return "https://giphy.com/embed/L5f4Z5JoOKARG";
      } else if (efek == 2) {
        return "https://giphy.com/embed/bfEOX1UuyCqVq";
      } else {
        return "https://giphy.com/embed/6IkjQmpaRwIabJ2G3C";
      }
    },
  };

  return (
    <div className="gif">
      <iframe title="nyoi" width="100%" height="100%" />
      <button
        onClick={() => {
          console.log(sus.imag());
        }}
      >
        Reaction
      </button>
    </div>
  );
}

export default Img;
