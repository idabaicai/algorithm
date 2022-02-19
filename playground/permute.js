
/**
 * 
 * @param {number[]} nums
 * @returns {number[][]}
 */
const permute = (nums) => {
  const len = nums.length
  const ans = []
  const path = []
  const used = new Array(len).fill(false)
  dfs(nums, len, 0, path,used, ans)
  return ans
}

/**
 * 
 * @param {number[]} nums 
 * @param {number} len 
 * @param {number} depth 
 * @param {number[]} path 
 * @param {number[][]} ans 
 * @param {boolean[]} used 
 */
const dfs = (nums, len, depth, path, used, ans) => {
  if(depth === len) {
    ans.push([...path])
    return
  }
  for(let i = 0; i < len; i++) {
    if(used[i]) {
      continue
    }
    path.push(nums[i])
    used[i] = true
    dfs(nums, len, depth + 1, path, used, ans)
    used[i] = false
    path.pop()
  }
  return ans
}

console.log(permute([1, 2]))