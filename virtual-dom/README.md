- vue react mvvm
  不去做DOM这一非常耗费性能的事
  不用去直接操作DOM, 操作data...将MVVM的修改(DOM片段)更新到页面上去。
  SPA->PWA Application性能特别好

  DOM数
  ComponentA render(JSX) replaceChild -> DOM树上
  性能差
  组件对应的树, 遍历
    Tag node
    属性发生了改变 style
    文本改变 innerText
    append li*n
    childTag

    oldState oldTree
    newState newTree? virtual DOM
    最后一站DOM树
    oldState DOM树的描述 JS版本的DOM树

    DOM树, 内存中有JS Virtual DOM

- elementObj => 新的virtualDOM diff 补丁 补到DOM上
    1
  2   3
 4 5 6  7
    1
  2   9
 4 5 6  8
 [{value: 9, index: 2}, {value: 8, index: 6}]
 - 先序深度优先遍历
 - patches []
