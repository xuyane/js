// 1、打车时，可以打专车或者快车。任何车都有车牌号和名称。
//    不同车价格不同，快车每公里1元，专车每公里2元。
//    行程开始时，显示车辆信息
//    行程结束时，显示打车金额（假定行程就5公里）
class Car {
  constructor(number,name){
    this.number = number
    this.name = name
  }
}
class KuaiChe extends Car{
  constructor(number,name){
    super(number,name)
    this.price = 1
  }
}

class Zhuanche extends Car{
  constructor(number,name){
    super(namber,name)
    this.price = 2
  }
}

class Trip{
  constructor(car){
    this.car = car
  }
  start(){
    console.log(`行程开始，名称：${this.car},车牌号：${this.car.number}`)
  }
  end(){
    console.log('行程结束，价格：' + (this.car.price * 5))
  }
}

let car = new KuaiChe(100,'桑塔纳')
let trip = new Trip(car)
trip.start()
trip.end()