/*
 * @Author: junjie.lean
 * @Date: 2020-08-03 13:22:49
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-10 17:35:51
 */

import React from "react";
import "./../enzyme.config";
import { shallow, mount } from "enzyme";
import LayoutIndex from "./../../view/page/layout-index";
import { expect } from "chai";
// import Provider from "./../../view/public/public-provider";

//基础api的使用
describe("描述:jest及enzyme和断言库chai的基础api使用", () => {
  const a = { number: 1 };
  const b = { number: 1 };

  const c = 1;
  const d = 1;

  const arr = [1, 2, 3, 4];
  const obj = {
    a,
    b,
    c,
    d,
  };

  class ClassConst {
    constructor() {
      this.foo = 1;
      this.bar = 2;
      this.baz = 3;
    }
  }

  const cca = new ClassConst();
  ClassConst.prototype.say = 1;
  // cca:{foo:()=>{}}

  //.not()
  it("断言库chai的api使用之: .not(), .include(), .equal()", () => {
    //.not()   对结果取反
    //.include()  包含,字符串 数组  对象均能使用
    //.equal()   全等 (===),
    expect(a).is.not.equal(b); //通过
    expect(arr).to.be.an("array").that.does.not.include(5);
    expect(obj).to.not.have.property("e");
  });

  it("断言库chai的api使用之: .deep(), .equal(), .eql()", () => {
    //.deep后续跟equal或者property,进行递归比较
    //.equal  全等 (===)
    //.eql   .deep.eql()的简写`
    expect(a).to.deep.equal(b); //通过
  });

  it("断言库chai的api使用之: .own(), .property()", () => {
    expect(cca).to.have.property("say");
    expect(cca).to.have.own.property("foo");
  });

  it("断言库chai的api使用之: .any(), .all(), .oneOf()", () => {
    //any 和 all  放在keys之前,对key匹配;
    //实际运用中可能all这个方法用的比较多;
    //oneOf  属于参数中的某一个
    expect(cca).to.have.any.keys("foo");
    expect(cca).to.have.all.keys("foo", "bar", "baz");
    expect(cca.foo).to.be.oneOf([1, 2, 3]);
  });

  it("断言库chai的api使用之: .true,  .false, .null, .undefined, .NaN", () => {
    //字面意思  不解释
  });

  it("断言库chai的api使用之: .exist, .empty", () => {
    //多用于判断dom节点是否存在或者为空
    //注意:  这两个都是不是方法  仅仅只是两个属性
    expect(a).to.exist;
    expect(null).to.not.exist;
    expect([]).to.be.empty;
  });

  it("断言库chai的api使用之: .above(),  .least(),  .below(), .most(), .within()", () => {
    //above 应大于
    //least 应大于等于  要加at
    //below 应小于
    //most  应小于等于  要加at
    //within  应该介于之间
    expect(cca.baz).to.be.above(2);
    expect(cca.baz).to.be.at.least(2);
    expect(cca.baz).to.be.below(4);
    expect(cca.baz).to.be.most(3);
    expect(cca.baz).to.be.within(2, 4);
  });

  it("断言库chai的api使用之: .satisfy()", () => {
    //.satisfy(function(){})
    expect(cca.baz).to.satisfy((num) => {
      return num > 2;
    });
  });

  
});

//组件的测试:
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
      "这是测试数据"
    );
  });
});
