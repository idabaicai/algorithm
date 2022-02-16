

import TreeNode from './TreeNode.js';

const dummyNode = new TreeNode(100)

const t1 = new TreeNode(1)
const t2 = new TreeNode(3)
const t3 = new TreeNode(2)
const t4 = new TreeNode(5)
const t5 = new TreeNode(1)

t1.left = t2
t1.right = t3
t2.left = t4
t2.right = t5

console.log(t1)

// dummyNode.travel1(t1)
dummyNode.travel2(t1)
// dummyNode.travel3(t1)

  