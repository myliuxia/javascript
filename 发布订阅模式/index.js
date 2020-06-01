/**
 * 简单的发布订阅模式
 */
let corp = {};   // 自定义一个公司对象
// 这里放一个列表用来缓存回调函数
corp.list = [];
// 去订阅事件
corp.on = function (fn) {
  // 二话不说，直接把fn先存到列表中
  this.list.push(fn);
};
// 发布事件
corp.emit = function () {
  // 当发布的时候再把列表里存的函数依次执行
  this.list.forEach(cb => {
    cb.apply(this, arguments);
  });
};
