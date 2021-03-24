/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 *
 * https://leetcode-cn.com/problems/can-place-flowers/description/
 *
 * algorithms
 * Easy (33.85%)
 * Likes:    322
 * Dislikes: 0
 * Total Accepted:    84.6K
 * Total Submissions: 250.3K
 * Testcase Example:  '[1,0,0,0,1]\n1'
 *
 * 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
 *
 * 给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n
 * ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：flowerbed = [1,0,0,0,1], n = 1
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：flowerbed = [1,0,0,0,1], n = 2
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * flowerbed[i] 为 0 或 1
 * flowerbed 中不存在相邻的两朵花
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// var canPlaceFlowers = function (flowerbed, n) {
//   // 错误解答 [0,0,1,0,1]
//   // 从左往右0的下一位（右边）为1，一趟
//   // 从右往左1的下一位（左边）为0，一趟
//   let index = 0
//   let f = 0 // 最大的花数目
//   while (index < flowerbed.length) {
//     if (flowerbed[index] === 0 && flowerbed[index + 1] === 0) {
//       flowerbed[++index] = 1
//       f++
//     }
//     index++
//   }
//   index = flowerbed.length - 1
//   while (index > 0) {
//     if (flowerbed[index] === 1 && flowerbed[index - 1] === 1) {
//       flowerbed[--index] = 0
//       f--
//     }
//     index--
//   }
//   console.log(f)
//   return n <= f
// }

// 错误解答 [0]等全 0 数组无法判断
// var canPlaceFlowers = function (flowerbed, n) {
//   let index = 0
//   let f = 0 // 最大的花数目
//   while (index < flowerbed.length) {
//     if (flowerbed[index] === 1 && flowerbed[index + 2] === 0) {
//       if (flowerbed[index + 3] === undefined) {
//         flowerbed[index + 2] = 1
//         f += 1
//         index += 2
//         continue
//       }
//       if (flowerbed[index + 3] !== 1) {
//         flowerbed[index + 2] = 1
//         f += 1
//         index += 2
//       }
//     }
//     index++
//   }
//   index = flowerbed.length - 1
//   while (index > 2) {
//     if (flowerbed[index] === 1 && flowerbed[index - 2] === 0) {
//       if (flowerbed[index - 3] === undefined) {
//         flowerbed[index - 2] = 1
//         f += 1
//         index -= 2
//         continue
//       }
//       if (flowerbed[index - 3] !== 1) {
//         flowerbed[index - 2] = 1
//         f += 1
//         index -= 2
//       }
//     }
//     index--
//   }
//   return n <= f
// }

var canPlaceFlowers = function (flowerbed, n) {
  // 左边和右边不为1则可以种
  let index = 0
  let f = 0
  while (index < flowerbed.length) {
    if (
      flowerbed[index - 1] !== 1 &&
      flowerbed[index] === 0 &&
      flowerbed[index + 1] !== 1
    ) {
      flowerbed[index] = 1
      f++
    }
    index++
  }
  return f >= n
}

// @lc code=end
