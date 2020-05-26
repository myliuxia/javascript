/**
 * 函数柯里化
 * 三大作用：
 *  1、参数复用
 *  2、提前确认
 *  3、延迟运行
 */

/**
 * 1、参数复用：
 *   就是利用闭包的原理，让我们前面传输过来的参数不要被释放掉
 */
/**
 *  例：如何实现add(2)(3) = 5
 */
// 普通函数
function add(x, y) {
  return x + y
}
// currying 后
function curryingAdd(x) {
  return function (y) {
    return x + y
  }
}

/**
 *  例：如何实现add(2)(3)(4) = 9
 */
let myAdd = (a, b, c) => a + b + c

function curry(fn, args) {
  let len = fn.length
  let _this = this
  let _args = args || []
  return function () {
    // 将参数转化未数组
    let args = Array.prototype.slice.apply(arguments)
    // 将参数记录args中
    args = Array.prototype.concat.call(_args, args)
    if (args.length < len) {
      return curry.call(_this, fn, args)
    }
    return fn.apply(this, args)
  }
}

let add = curry(myAdd)

console.log(add(2)(3)(4))


/**
 * 2、提前确认：
 *   避免重复去判断某一条件是否符合，不符合则return 不再继续执行下面的操作
 */
// 普通函数
let on = function (element, event, handler) {
  if (document.addEventListener) {
    if (element && event && handler) {
      element.addEventListener(event, handler, false)
    }
  } else {
    if (element && event && handler) {
      element.attachEvent('on' + event, handler)
    }
  }
}
// Currying 后
let curryingOn = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()
/**
 * 3、延迟执行：
 *   避免重复的去执行程序，等真正需要结果的时候再执行
 *   js中的bind这个方法，用到的就是这个特征
 */
Function.prototype.bind = function (context) {
  var _this = this
  // 获得出第一个参数外的其他参数
  var args = Array.prototype.slice.call(arguments, 1)
  return function () {
    return _this.apply(context, args)
  }

}

/**
 * 4、通用的封装方法
 */
// 初步封装（只能多扩展一个参数）
var currying = function (fn) {
  // args
  var args = Array.prototype.slice.call(arguments, 1)
  return function () {
    // 将后面方法里的全部参数和args合并
    var newArgs = args.concat(Array.prototype.slice.call(arguments))
    return fn.apply(this, newArgs)
  }
}

// 添加递归在进行封装__支持多参数传递
function progressCurrying(fn, args) {
  var _this = this
  var len = fn.length
  var _args = args || []
  return function () {
    // 获取后面方法的参数
    var args = Array.prototype.slice.call(arguments)
    // 将参数添加到args保存
    args = Array.prototype.concat.call(_args, args)
    // 如果参数个数小于最初的fn.length,则递归调用，继续手机参数
    if (args.length < len) {
      return progressCurrying(_this, fn, args)
    }
    // 参数收集完毕。则执行fn
    return fn.apply(this, args)
  }
}

/**
 * 5、经典面试题
 *  实现一个add方法，使计算结果能够满足一下预期
 *  add(1)(2)(3) = 6
 *  add(1,2,3)(4) = 10
 *  add(1)(2)(3)(4)(5) = 15
 */

function add() {
  // 第一次执行时，定义一个数组用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments)

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function () {
    _args.push(...arguments)
    return _adder
  }

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b
    })
  }

  return _adder;
}