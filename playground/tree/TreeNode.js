
class TreeNode {
  /**
   * create a TreeNode
   * @param {number} val - the value of node
   * @param {TreeNode} left - the left node
   * @param {TreeNode} right 
   */
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
  /**
   * 遍历树 前序
   * @param {TreeNode} node 
   */
  travel1(node) {
    if(node === null) {
      return
    }
    console.log(node.val)
    this.travel1(node.left)
    this.travel1(node.right)
  }

  /**
   * 遍历树 中序
   * @param {TreeNode} node 
   */
   travel2(node) {
    if(node === null) {
      return
    }
    this.travel2(node.left)
    console.log(node.val)
    this.travel2(node.right)
  }

  /**
   * 遍历树 后序
   * @param {TreeNode} node 
   */
   travel3(node) {
    if(node === null) {
      return
    }
    this.travel3(node.left)
    this.travel3(node.right)
    console.log(node.val)
  }
}

export default TreeNode