/*
 * @Author: junjie.lean
 * @Date: 2020-07-31 17:19:26
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-03 16:47:11
 */

import React, { useEffect, useState } from "react";

export default function (props) {
  const [state, setState] = useState(props.state || []);
  const [inputValue, setInputValue] = useState("");

  const add = () => {
    if (inputValue !== "") {
      setState([...state, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="enzyme-component-demo">
      <input
        value={inputValue}
        onChange={({ target: { value } }) => {
          setInputValue(value.toString().trim());
        }}
        style={{ height: 30, margin: 30 }}
      />
      <button
        style={{ height: 30, margin: 30, padding: "0 10px" }}
        onClick={add}
      >
        添加
      </button>
      <hr />

      {state.length == 0 ? (
        <p>还未添加数据</p>
      ) : (
        <div className="data-container">
          {state.map((item, index) => {
            return <p key={index.toString()}>{item}</p>;
          })}
        </div>
      )}
    </div>
  );
}
