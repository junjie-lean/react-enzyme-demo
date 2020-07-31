/*
 * @Author: junjie.lean
 * @Date: 2020-07-31 17:19:26
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-07-31 17:20:24
 */

import React from "react";
import reactdom from "react-dom";

export default function (props) {
  useEffect(() => {
    console.log(reactdom);
  }, []);
  return <div></div>;
}
