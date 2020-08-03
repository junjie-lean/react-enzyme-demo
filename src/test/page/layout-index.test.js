/*
 * @Author: junjie.lean
 * @Date: 2020-08-03 13:22:49
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-03 17:16:24
 */

import React from "react";
import "./../enzyme.config";
import { shallow, mount } from "enzyme";
import LayoutIndex from "./../../view/page/layout-index";
import { expect } from "chai";

describe("描述:Layout-index.js组件的单元测试:", () => {
  const warp = mount(<LayoutIndex state={["nihao", "haode"]} />);

  test("测试点描述:顶层div具有'enzyme-compoent-demo'类名?", () => {
    expect(warp.is(".enzyme-compoent-demo"));
  });

  test("测试点描述:顶层div是否是空节点?", () => {
    // expect(warp.find(".data-container").exists()).toBe(true);
    expect(
      warp
        // .setProps({ state: ["你好呐!"] })
        .find(".data-container")
        .exists()
    ).to.equal(true);
  });
});

