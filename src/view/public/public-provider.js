/*
 * @Author: junjie.lean
 * @Date: 2020-03-17 09:52:08
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-10 09:26:38
 */

import React, { createContext } from "react";
import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "../router/router-index";
import ProfilerMoniter from "./public-profile";
import { ConfigProvider } from "antd";

export const Context = createContext({});

export default function App() {
  const store = {
    setValue: (key, value) => {
      store[key] = value;
    },
    deleteKey: (key) => {
      delete store[key];
    },
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Context.Provider value={store}>
        <ProfilerMoniter id="react-root-app" open={false}>
          <RouterRelation />
        </ProfilerMoniter>
      </Context.Provider>
    </ConfigProvider>
  );
}
