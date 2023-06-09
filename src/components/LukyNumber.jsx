import React, { useState } from "react";
import styled from "./LukyNumber.module.css";
export default function LukyNumber() {
  const [num, setNum] = useState("");
  const [count, setCount] = useState(0);

  function MatchNumber() {
    const matchNum = Math.floor(Math.random("num") * 10);
    console.log(matchNum);
    if (matchNum > num) {
      alert("you guessed a smaller number");
      setCount(count + 1);
      setNum(" ");
    } else if (matchNum < num) {
      alert("you guessed a Greater number .");
      setCount(count + 1);
      setNum(" ");
    } else {
      alert("congratulations you guessed the right number count= " + count);
      setCount(0);
      setNum(" ");
    }
  }
  return (
    <div>
      <h1> Luky Number......</h1>
      <div className={styled.container}>
        <input
          type="text"
          value={num}
          placeholder="Please Enter The Number"
          onChange={(e) => setNum(e.target.value)}
        />
        <button onClick={MatchNumber} className={styled.btn}>
          Check Number
        </button>
      </div>
    </div>
  );
}
