import React, { useState } from "react";
import "./App.css";
import Intod from "./Intod";
import Img from "./Img";
// import { useState } from 'react';

function App() {
  const [byybu, setBybu] = useState(1);
  Img(byybu);
  return (
    <div>
      <nav>
        <h1>aku sayangnya ke kamu : {byybu}</h1>
        <button onClick={() => setBybu((anjay) => anjay + 1)}>
          makin sayang
        </button>
        <button
          onClick={() =>
            setBybu(function (anjay) {
              if (anjay > 0) {
                return anjay - 1;
              } else {
                alert("tollol");
                return (anjay = 0);
              }
            })
          }
        >
          kurang sayang
        </button>
        <Img />
        <Intod />
      </nav>
    </div>
  );
}

export default App;
