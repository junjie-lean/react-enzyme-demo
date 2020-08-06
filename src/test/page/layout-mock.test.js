/*
 * @Author: junjie.lean
 * @Date: 2020-08-05 10:21:16
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-06 15:32:48
 */

import React from "react";
import "./../enzyme.config";
import { shallow, mount } from "enzyme";
import LayoutIndex from "./../../view/page/layout-index";
import { expect } from "chai";
import {fn} from 'jest';

const mockFn = fn();



describe("test", () => {
  it("case1", () => {
    expect(1).to.equal(1);
  });
});
