/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (48.33%)
 * Likes:    1455
 * Dislikes: 0
 * Total Accepted:    230.1K
 * Total Submissions: 476K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 *
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7]
 * 的子序列。
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10^4
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 你可以设计时间复杂度为 O(n^2) 的解决方案吗？
 * 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLISErr = function (nums) {
  var record = []
  // 最大值
  var res = 1
  nums.forEach((num, index) => {
    let tempIndex, temp
    // 选择的数组、差值
    // 循环创建的每个数组
    for (let index = 0; index < record.length; index++) {
      const t = num - record[index][0]
      if (temp === undefined) {
        temp = t
      }
      if (t > 0 && t < temp) {
        tempIndex = index
      }
      temp = t
    }
    if (tempIndex !== undefined) {
      record[tempIndex].unshift(num)
      res = record[tempIndex].length > res ? record[tempIndex].length : res
    }

    // 没有该元素作为起始则新建数组
    if (!record[index]) {
      record[index] = [num]
    }
  })
  return res
}
// @lc code=end

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  var res = 1
  // dp表示对应索引结尾的递增最长长度，第一位永远为0
  const dp = [1]
  for (let index = 1; index < nums.length; index++) {
    // 每位初始化为1
    dp[index] = 1
    // 如果满足递增条件
    // 循环dp数组取最长
    let temp = 0
    for (let i = 0; i < dp.length; i++) {
      if (nums[index] > nums[i]) {
        temp = dp[index] + dp[i] > temp ? dp[index] + dp[i] : temp
      }
    }
    dp[index] = temp || 1
  }
  console.log(dp)
  // 取最大长度
  dp.forEach((r) => {
    res = r > res ? r : res
  })

  return res
}
// @lc code=end

module.exports = lengthOfLIS
