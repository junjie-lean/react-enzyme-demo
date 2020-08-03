# react jest enzyme 组件单元测试demo

### 测试分类概念  

  根据测试维度不同,可以将测试分为
- 单元测试
- 集成测试
- 功能测试
- 性能测试
- ...

### Jest概念

Jest是Facebook发布的一个开源的测试环境,基于它能在node环境模拟浏览器环境进行DOM API的支持,它还提供了断言库和mock库等等.

### Enzyme概念

Enzyme是Airbnb发布的一个测试工具,它提供了类似于jQuery的DOM API和链式调用方法.

### React单元测试原理

通过运行在jest后的组件,是否符合创建见预期. 如果符合,则通过测试.