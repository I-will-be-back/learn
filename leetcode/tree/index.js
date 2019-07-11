function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function inorderTraversal(root) {
  let arr = [];
  // 一次小树单元的遍历
  const inorder = (root) => {
    if (root === null) return null;
    inorder(root.left); // 左
    arr.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return arr;
}

let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);
let a4 = new TreeNode(4);
let a5 = new TreeNode(5);
let a6 = new TreeNode(6);
a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;

console.log(inorderTraversal(a1));
// [1, 3, 2]