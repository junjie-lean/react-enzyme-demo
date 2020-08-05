/*
 * @Author: junjie.lean
 * @Date: 2020-08-03 17:13:07
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-05 10:05:11
 */

import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
export default withRouter(() => {
  const [state, setState] = useState([]);

  //   https://jsonplaceholder.typicode.com/posts
  const fetchData = async () => {
    let { data } = await axios.post(
      "http://10.10.0.19:4001/iscrs/web/public/getUserinfo"
    );
    console.log(data);
  };

  useEffect(() => {
    setState([1, 2, 3, 4]);
    fetchData();
  }, []);

  return (
    <div>
      {state.map((item, index) => {
        return <p key={index.toString()}> {item.toString()} </p>;
      })}
    </div>
  );
});
