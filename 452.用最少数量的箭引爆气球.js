/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 *
 * https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/description/
 *
 * algorithms
 * Medium (50.57%)
 * Likes:    370
 * Dislikes: 0
 * Total Accepted:    67.9K
 * Total Submissions: 134.3K
 * Testcase Example:  '[[10,16],[2,8],[1,6],[7,12]]'
 *
 *
 * 在二维空间中有许多球形的气球。对于每个气球，提供的输入是水平方向上，气球直径的开始和结束坐标。由于它是水平的，所以纵坐标并不重要，因此只要知道开始和结束的横坐标就足够了。开始坐标总是小于结束坐标。
 *
 * 一支弓箭可以沿着 x 轴从不同点完全垂直地射出。在坐标 x 处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足
 * xstart ≤ x ≤ xend，则该气球会被引爆。可以射出的弓箭的数量没有限制。
 * 弓箭一旦被射出之后，可以无限地前进。我们想找到使得所有气球全部被引爆，所需的弓箭的最小数量。
 *
 * 给你一个数组 points ，其中 points [i] = [xstart,xend] ，返回引爆所有气球所必须射出的最小弓箭数。
 *
 *
 * 示例 1：
 *
 *
 * 输入：points = [[10,16],[2,8],[1,6],[7,12]]
 * 输出：2
 * 解释：对于该样例，x = 6 可以射爆 [2,8],[1,6] 两个气球，以及 x = 11 射爆另外两个气球
 *
 * 示例 2：
 *
 *
 * 输入：points = [[1,2],[3,4],[5,6],[7,8]]
 * 输出：4
 *
 *
 * 示例 3：
 *
 *
 * 输入：points = [[1,2],[2,3],[3,4],[4,5]]
 * 输出：2
 *
 *
 * 示例 4：
 *
 *
 * 输入：points = [[1,2]]
 * 输出：1
 *
 *
 * 示例 5：
 *
 *
 * 输入：points = [[2,3],[2,3]]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * points[i].length == 2
 * -2^31 start end
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // 寻找相互重叠区间的最小个数
  if (points.length === 0) {
    return 0
  }
  if (points.length === 1) {
    return 1
  }
  let minArrow = 0
  const playground = [points[0]]
  let i = 1
  const len = points.length
  while (i < len) {
    let maxIndex = undefined // 保存存重叠区间的位置
    let Arr = []
    let maxLen = 0
    for (let j = 0; j < playground.length; j++) {
      if (
        (points[i][0] - playground[j][1]) * (points[i][1] - playground[j][0]) <=
        0 // 存在重叠区间
      ) {
        // 如何？获取重叠区间
      } else {
        playground.push(points[i])
      }
    }
    // 如果maxLen不为0，将maxIndex替换为Arr
  } // 重复迭代，直到所有数组都被判断
  return playground.length
}
// @lc code=end
