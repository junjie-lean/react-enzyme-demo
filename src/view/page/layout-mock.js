/*
 * @Author: junjie.lean
 * @Date: 2020-08-03 17:13:07
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-03 17:33:29
 */

import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

export default withRouter(() => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState([1, 2, 3, 4]);
  }, []);

//   https://jsonplaceholder.typicode.com/posts
  return (
    <div>
      {state.map((item, index) => {
        return <p key={index.toString()}> {item.toString()} </p>;
      })}
    </div>
  );
});
