### 1、创建数组

``` javascript
  var arr = []
  var arr = new Array()
```

### 2、join() (原数组不改变)

``` javascript
  var str = arr.join()
  var str = arr.join('')
```

### 3、push() 和 pop() (原数组改变)

push: 接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后【数组的长度】。

pop: 数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。

### 4、shift() 和 unShift() (原数组改变)

shift：删除原数组第一项，并返回【删除元素的值】；如果数组为空则返回undefined；

unshift: 将参数添加到原数组开头，并返回【新数组长度】
