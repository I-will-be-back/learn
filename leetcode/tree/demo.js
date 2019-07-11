function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let inorderTraversal = (root) => {
  let stack = [], // 堆栈
  result = [], // 解脱
  cur;
  cur = root;
  // 未处理
  while (stack.length > 0 || cur != null) {
    // 节点不为空
    if (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      result.push(cur.val);
      cur = cur.right;
    }
  }
  return result;
}