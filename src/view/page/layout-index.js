/*
 * @Author: junjie.lean
 * @Date: 2020-07-31 17:19:26
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-05 14:54:40
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
        className="inputBox"
      />
      <button
        style={{ height: 30, margin: 30, padding: "0 10px" }}
        onClick={add}
        className="add"
      >
        添加
      </button>
      <hr />

      {state.length == 0 ? (
        <div className="nodata">还未添加数据</div>
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


