/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (42.38%)
 * Likes:    959
 * Dislikes: 0
 * Total Accepted:    240K
 * Total Submissions: 566.1K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 *
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 *
 * 进阶：
 *
 *
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 *
 * 示例 2：
 *
 *
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 *
 * 示例 3：
 *
 *
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^9
 * nums 是一个非递减数组
 * -10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = -1
  let end = -1
  let left = 0
  let ind
  let right = nums.length - 1

  while (left < right) {
    let mid = parseInt((right + left) / 2)
    if (nums[left] === target) {
      ind = left
      break
    }
    if (nums[right] === target) {
      ind = right
      break
    }
    if (nums[mid] === target) {
      ind = mid
      break
    }
    if (right - left === 1) {
      break
    }
    // 如果两端和中间都没有命中
    if (nums[mid] < target) {
      // 中位数小于等于目标
      left = mid
    } else {
      // 中位数大于等于目标
      right = mid
    }
  }
  console.log(ind)

  left = ind - 1
  right = ind + 1

  while ((start === -1 || end === -1) && ind !== undefined) {
    if (nums[left] === target) {
      left--
    } else {
      start = left + 1
    }
    if (nums[right] === target) {
      right++
    } else {
      end = right - 1
    }
  }
  return [start, end]
}
// @lc code=end

module.exports = searchRange
