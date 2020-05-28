/**
 * 1、创建数组
 */
var arr = []
var arr = new Array()

/**
 * join (原数组不改变)
 * 数组 转 字符串 默认用逗号隔开
 */
var str = arr.join()
var str = arr.join('')

/**
 * push() 和 pop() (原数组改变)
 */

/**
 * shift() 和 unShift() (原数组改变)
 */

/**
 * sort() (原数组改变)
 */
var arr1 = ['a', 'd', 'b', 'c']
arr1.sort()  // ['a','b','c','d']
var arr2 = [13, 24, 51, 3]
arr2.sort()  // [13, 24, 3, 51] ,按第一个数字顺序排列
arr2.sort((a, b) => { return a - b }) // [3, 13, 24, 51] ,升序
arr2.sort((a, b) => { return b - a }) // [51, 24, 13, 3] ,降序