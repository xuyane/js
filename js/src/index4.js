// 用Promise 来说明SO
// 1、单一职责原则：每个then中的逻辑只做好一件事
// 2、开放封闭原则：如果新增需求、扩展then
// 3、对扩展开放、对修改封闭

function loadImg(src){
  let promise = new Promise(function(resolve,reject){
    let img = document.createElement('img')
    img.onload = function(){
      resolve(img)
    }
    img.onerror = function() {
      reject('图片加载失败')
    }
    img.src = src
  })
  return promise
}

let src = 'https://www.baidu.com/img/bd_logo1.png'
let result = loadImg(src)
result.then(function(img){
  alert(`width：${img.width}`)
  return img
}).then(function(img){
  alert(`height：${img.height}`)
}).catch(function (ex) {
  alert(ex)
})

//S -单一职责原则
// O -开放封闭原则
// L - 李氏置换原则
// I - 接口独立原则
// D - 依赖倒置原则

// 介绍23种设计模式

// 创建型
// 组合型
// 行为型
// 面试真题1
// 1、打车时，可以打专车或者快车。任何车都有车牌号和名称。
//    不同车价格不同，快车每公里1元，专车每公里2元。
//    行程开始时，显示车辆信息
//    行程结束时，显示打车金额（假定行程就5公里）

