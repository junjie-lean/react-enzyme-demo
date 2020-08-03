/*
 * @Author: junjie.lean
 * @Date: 2020-07-31 17:19:26
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-03 10:31:35
 */

import React from "react";
import reactdom from "react-dom";

export default function (props) {
  useEffect(() => {
    console.log(reactdom);
  }, []);

  const [state, setState] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const add = () => {
    if (inputValue !== "") {
      setState([...state, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={({ target: { value } }) => {
          setInputValue(value.toString().trim());
        }}
        style={{ height: 30, margin: 30 }}
      />
      <button style={{ height: 30, margin: 30, padding: "0 10px" }} onClick={add}>
        添加
      </button>
      <hr />

      {state.length == 0 ? (
        <p>还未添加数据</p>
      ) : (
        state.map((item, index) => {
          return <p key={index.toString()}>{item}</p>;
        })
      )}
    </div>
  );
}
