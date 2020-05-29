/**
 * 简单工厂模式
 */
// 举个栗子
// 食品实例生成的详细过程
class Food {
  constructor(name, type) {
    this.name = name // 食品
    this.type = type // 食品类型
  }

  desc() {
    console.log(`我是${this.name},属于${this.type}类型`);
  }

}

class FoodFactory {
  // ES6中静态方法不会被实例调用,可以被类调用
  static create(name, type) {
    // 创建一种食品实例
    return new Food(name, type)
  }
}

// 工厂开始生产食品实例了
FoodFactory.create('核桃', '坚果').desc() // 我是核桃, 属于坚果类型
FoodFactory.create('旺仔', '饮品').desc() // 我是旺仔, 属于饮品类型
// 这样我们就可以 生成出我们想要的食品, 只要你给我们 一个名称和类型


/**
 * 简单单例模式
 */
class Singleton {
  // js模拟
  constructor() { }

  login() {
    console.log('login...');
  }
}

// 给类挂载一个静态方法, 只有一个
// 自执行函数: 只是为了将变量保存在 函数的作用域中, 避免污染而已
Singleton.singleInstance = (function () {
  // 通过闭包实现: 类似通过一个全局变量来存储这个实例
  let instance;  // 保存创建好的实例
  return function () {
    if (!instance) {
      // 如果没有创建, 就创建一个
      instance = new Singleton()
    }
    return instance
  }
})()
// 通过调用静态方法来创建单实例
let single11 = Singleton.singleInstance()
let single22 = Singleton.singleInstance()
// 通过调用类 初始化的实例
let single3333 = new Singleton()
single11.login();
single22.login();
console.log(single11 === single22);  // ture
console.log(single11 === single3333); // false