/*
 * @Author: junjie.lean
 * @Date: 2020-08-03 13:22:49
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-05 13:55:01
 */

import React from "react";
import "./../enzyme.config";
import { shallow, mount } from "enzyme";
import LayoutIndex from "./../../view/page/layout-index";
import { expect } from "chai";
import { before } from "lodash";

describe("描述:Layout-index.js组件的单元测试:", () => {
  const state = [];
  const warp = mount(<LayoutIndex state={state} />);

  it("测试点描述:顶层div具有'enzyme-compoent-demo'类名?", () => {
    expect(warp.is(".enzyme-compoent-demo"));
  });

  it("测试点描述:div.data-container是否是空节点?", () => {
    if (state.length > 0) {
      expect(warp.find(".data-container").exists()).to.equal(true);
      expect(warp.find(".data-container").find("p").length).to.equal(
        state.length
      );
    } else {
      expect(warp.find(".nodata").exists()).to.equal(true);
    }
  });

  it("测试点描述:新增按钮的类名是否是add", () => {
    expect(warp.find(".add").exists()).to.equal(true);
    if (warp.find(".add").exists()) {
      expect(warp.find(".add").text()).to.equal("添加");
    }
  });

  it("输入框相关测试", () => {


    warp
      .find(".inputBox")
      .simulate("change", { target: { value: "这是测试数据" } });
    warp.find(".add").simulate("click");
    expect(warp.find(".data-container").exists()).to.equal(true);
    expect(warp.find(".data-container").childAt(0).text()).to.equal(
      这是测试数据
    );
  });
});
