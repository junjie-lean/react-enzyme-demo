# react jest enzyme 组件单元测试demo

### 测试分类概念  

  根据测试维度不同,可以将测试分为
- 单元测试
- 集成测试
- 功能测试
- 性能测试
- ...
  
  这里只介绍前端的react组件单元测试,我对单元测试的理解是:将react项目以组件拆分为单位,将各个单位通过相关工具进行预期与实际结果相匹配,这个匹配的过程由测试工具和框架在非浏览器环境进行自动化模拟处理,最终的出结果.这个过程就可以成为自动化单元测试.


### Jest概念

Jest是Facebook发布的一个开源的测试环境,基于它能在node环境模拟浏览器环境进行DOM API的支持,它还提供了断言库和mock库等等.

### Enzyme概念

Enzyme是Airbnb发布的一个测试工具,它提供了类似于jQuery的DOM API和链式调用方法.


### Enzyme工具api

- .childAt(index) => ShallowWrapper
返回具有指定索引的子元素到新的wrapper

- .find(selector) => ShallowWrapper
根据选择器，找到渲染树中的节点。

- .findWhere(predicate) => ShallowWrapper
找到渲染树中里被的断言函数返回true的节点 参数：predicate (ShallowWrapper => Boolean) 断言函数返回布尔值

- .filter(selector) => ShallowWrapper
过滤当前包装器中与所提供的选择器不匹配的节点。

- .filterWhere(predicate) => ShallowWrapper
过滤当前包装器里被断言函数predicate不返回true的节点

- .contains(nodeOrNodes) => Boolean
返回给定的 节点/节点数组 是否在渲染树中的布尔值。

- .containsMatchingElement(node) => Boolean
返回在浅渲染树中是否存在给定的node节点 的布尔值。

- .containsAllMatchingElements(nodes) => Boolean
返回在浅渲染树中是否存在给定的 所有 react元素 的布尔值。

- .containsAnyMatchingElements(nodes) => Boolean
返回在浅渲染树中是否存在给定react元素 之一 的布尔值

- .equals(node) => Boolean
根据期望值，返回当前渲染树是否等于给定节点的 布尔值

- .matchesElement(node) => Boolean
返回当前给定的react元素 是否 匹配浅渲染树 的布尔值

- .hasClass(className) => Boolean
是否有这个className

- .is(selector) => Boolean
当前节点是否与提供的选择器匹配

- .exists() => Boolean
当前节点是否存在

- .isEmpty() => Boolean
弃用: 用 .exists() 代替.

- .not(selector) => ShallowWrapper
删除当前wrapper中与所提供的选择器匹配的节点。 (与 .filter()作用相反)

- .children() => ShallowWrapper
获取当前 wrapper 中所有子节点的 wrapper.

- .childAt(index) => ShallowWrapper
返回具有指定索引的子元素的 wrapper

- .parents() => ShallowWrapper
获取当前节点的所有父级（祖先）

- .parent() => ShallowWrapper
获取当前节点的直接父级

- .closest(selector) => ShallowWrapper
根据选择器，获取当前节点的第一个祖先


- .shallow([options]) => ShallowWrapper
Shallow renders the current node and returns a shallow wrapper around it.

- .render() => CheerioWrapper
返回当前节点的子树的CheerioWrapper

- .unmount() => ShallowWrapper
卸载组件的方法

- .text() => String
返回当前渲染树中文本节点的 字符串表示形式。

- .html() => String
返回当前节点的静态HTML呈现

- .get(index) => ReactElement
返回给出索引的节点 ReactElement

- .getNode() => ReactElement
返回底层节点

- .getNodes() => Array<ReactElement>
返回底层的一些节点

- .at(index) => ShallowWrapper
返回 参数：索引节点的 浅wrapper。

- .first() => ShallowWrapper
返回当前第一个节点 wrapper

- .last() => ShallowWrapper
返回当前最后一个节点 wrapper

- .state([key]) => Any
返回根组件的状态

- .context([key]) => Any
返回根组件的上下文环境

- .props() => Object
返回当前节点的 props

- .prop(key) => Any
返回当前节点props的某个(key)属性的值

- .key() => String
返回当前节点的键（key）

- .simulate(event[, data]) => ShallowWrapper
模拟当前节点上的事件

- .setState(nextState) => ShallowWrapper
手动setState更新根组件状态

- .setProps(nextProps) => ShallowWrapper
手动更新根组件的props

- .setContext(context) => ShallowWrapper
手动设置根组件的上下文

- .instance() => ReactComponent
返回根组件的实例

- .update() => ShallowWrapper
在根组件实例上调用.forceUpdate()

- .debug() => String
返回当前浅渲染树的字符串表示形式，以便进行调试

- .type() => String|Function
返回包装器(wapper)的当前节点的类型。

- .name() => String
返回当前节点的名称

- .forEach(fn) => ShallowWrapper
迭代当前的每个节点并执行提供的函数

- .map(fn) => Array
将当前的节点数组映射到另一个数组

- .reduce(fn[, initialValue]) => Any
将当前节点数组减少为一个值

- .reduceRight(fn[, initialValue]) => Any
将当前节点数组从右到左减少为一个值 

- .slice([begin[, end]]) => ShallowWrapper
根据Array＃slice的规则返回具有原始包装器的节点的子集的新包装器。

- .tap(intercepter) => Self
点击wrapper方法链。有助于调试。 

- .some(selector) => Boolean
返回 是否有 节点与提供的选择器匹配。

- .someWhere(predicate) => Boolean
返回 是否有 节点 传递所提供的断言函数。

- .every(selector) => Boolean
返回 是否 有节点与提供的选择器匹配。

- .everyWhere(predicate) => Boolean
返回 是否 所有 节点都传递所提供的断言函数。

- .dive([options]) => ShallowWrapper
浅渲染当前wrapper的一个非DOM子元素，并在结果周围返回一个wrapper

###  断言库chai

  断言库chai提供了非常便捷的语义化api,方便使用者进行断言.

  断言库chai提供了几个语言链接口,来提高断言代码的可读性.

to  
be  
been  
is  
that  
which  
and  
has  
have  
with  
at  
of  
same  


  断言库chai提供的api如下

- .not
对之后的断言取反
 
- .deep
设置deep标记，然后使用equal和property断言。该标记可以让其后的断言不是比较对象本身，而是递归比较对象的键值对
 
- .any
在keys断言之前使用any标记（与all相反）

- .a(type) / .an(type)
type：String，被测试的值的类型
a和an断言即可作为语言链又可作为断言使用
 
- .include(value) / contains(value)
value：Object | String | Number
include()和contains()即可作为属性类断言前缀语言链又可作为作为判断数组、字符串是否包含某值的断言使用。当作为语言链使用时，常用于key()断言之前
 
- .ok
断言目标为真值。
 
- .true
断言目标为true，注意，这里与ok的区别是不进行类型转换，只能为true才能通过断言

-.false
断言目标为false

- .null
断言目标为null
 
- .undefined
断言目标为undefined。

- .NaN
断言目标为非数字NaN

- .exist
断言目标存在，即非null也非undefined

- .empty
断言目标的长度为0。对于数组和字符串，它检查length属性，对于对象，它检查可枚举属性的数量

- .arguments
断言目标是一个参数对象arguments

- .equal(value)
断言目标严格等于(===)value。另外，如果设置了deep标记，则断言目标深度等于value

- .eql(value)
断言目标深度等于value，相当于deep.equal(value)的简写

- .above(value)
断言目标大于（超过）value
也可接在length后来断言一个最小的长度。相比直接提供长度的好处是提供了更详细的错误消息
 
- .least(value)
断言目标不小于（大于或等于）value
也可接在length后来断言一个最小的长度。相比直接提供长度的好处是提供了更详细的错误消息

- .below(value)
断言目标小于value
也可接在length后来断言一个最大的长度。相比直接提供长度的好处是提供了更详细的错误消息

- .most(value)
断言目标不大于（小于或等于）value
也可接在length后来断言一个最大的长度。相比直接提供长度的好处是提供了更详细的错误消息

- .within(start, finish)
start：Number，下限
finish：Number，上限
断言目标在某个区间内
也可接在length后来断言一个长度区间。相比直接提供长度的好处是提供了更详细的错误消息

- .instanceof(constructor)
constructor：Constructor，构造函数
断言目标是构造函数constructor的一个实例

- .property(name, [value])
断言目标是否拥有某个名为name的属性，可选地如果提供了value则该属性值还需要严格等于（===）value。如果设置了deep标记，则可以使用点.和中括号[]来指向对象和数组中的深层属性
如果目标是一个数组，还可以直接使用一个或多个数组下标作为name来在嵌套数组中断言deep.property
此外，property把断言的主语（subject）从原来的对象变为当前属性的值，使得可以在其后进一步衔接其它链式断言（来针对这个属性值进行测试）
注意，只有当设置了deep标记的时候，在property() name中的点（.）和中括号（[]）才必须使用双反斜杠`进行转义（为什么是双反斜杠，在前文有提及），当没有设置deep`标记的时候，是不能进行转义的

- .ownProperty(name)
断言目标拥有名为name的自有属性
断言目标的某个自有属性存在描述符对象，如果给定了descroptor描述符对象，则该属性的描述符对象必须与其相匹配

- .length
设置.have.length标记作为比较length属性值的前缀

- .lengthOf(value)
断言目标的length属性为期望的值

- .match(regexp)
断言目标匹配到一个正则表达式

- .string(string)
断言目标字符串包含另一个字符串

- .keys(key1, [key2], [...])
断言目标包含传入的属性名。与any，all，contains或者have前缀结合使用会影响测试结果：
当与any结合使用时，无论是使用have还是使用contains前缀，目标必须至少存在一个传入的属性名才能通过测试。注意，any或者all应当至少使用一个，否则默认为all
当结合all和contains使用时，目标对象必须至少拥有全部传入的属性名，但是它也可以拥有其它属性名
当结合all和have使用时，目标对象必须且仅能拥有全部传入的属性名

- .throw(constructor)
断言目标函数会抛出一个指定错误或错误类型（使用instanceOf计算），也可使用正则表达式或者字符串来检测错误消息
注意，当一个抛错断言被否定了（前面有.not），那么它会从Error构造函数开始依次检查各个可能传入的参数。检查一个只是消息类型不匹配但是已知的错误，合理的方式是先断言该错误存在，然后使用.and后断言错误消息不匹配

- .respondTo(method)
断言目标类或对象会响应一个方法（存在这个方法）
如果需要检查一个构造函数是否会响应一个静态方法（挂载在构造函数本身的方法），请查看itself标记

- .itself
设置itself标记，然后使用respondTo断言

- .satisfy(method)
断言目标值能够让给定的测试器返回真值

- .closeTo(expected, delta)

- .members(set)
断言目标是set的超集，或前者有后者所有严格相等（===）的成员。另外，如果设置了deep标记，则成员进行深度比较（include/contains只能接受单个值，但它们的主语除了是数组，还可以判断字符串；members则将它们的能力扩展为能够接受一个数组，但主语只能是数组）

- .oneOf(list)
断言目标值出现在list数组的某个顶层位置（直接子元素，严格相等）

- .increase(object, property)
断言目标方法会增加指定对象的属性

- .decrease(object, property)
断言目标方法会减少指定对象的属性

- .extensible
断言目标对象是可扩展的（可以添加新的属性）

- .sealed
断言目标对象是封闭的（无法添加新的属性并且存在的属性不能被删除但可以被修改）

- .frozen
断言目标对象是冻结的（无法添加新的属性并且存在的属性不能被删除和修改）
