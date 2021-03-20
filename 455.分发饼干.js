/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (children, cookies) {
  var conter = 0
  for (const cookie of cookies) {
    var min = Infinity
    var i = null
    for (let index = 0; index < children.length; index++) {
      var temp = cookie - children[index]
      if (temp >= 0 && temp < min) {
        min = temp
        i = index
      }
    }

    if (min !== Infinity) {
      conter++
      if (i !== null) {
        children.splice(i, 1)
      }
    }
  }
  return conter
}

var findContentChildren = function (children, cookies) {
  cookies = cookies.sort()
  children = children.sort()
  let count = 0
  let icookie = 0
  let ichild = 0
  while (icookie < cookies.length && ichild < children.length) {
    if (cookies[icookie] >= children[ichild]) {
      count++
      ichild = icookie++
    }
    icookie++
  }
  return count
}
// @lc code=end
