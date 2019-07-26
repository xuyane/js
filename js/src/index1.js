// 什么是面向对象
class People {
  name
  age
  protected weight //受保护的属性，只有自己或者子类可以访问
  constructor(name, age) {
    this.name = name
    this.age = age
    this.weight = 120
  }
  eat() {
    alert(`${this.name} eat something`)
  }
  speak() {
    alert(`My name is ${this.name},age ${this.age}`)
  }
}

// let zhang = new Person('zhang', 20)
// zhang.eat()
// zhang.speak()
// let wang = new Person('wang', 21)
// wang.eat()
// wang.speak()

// 继承、子类继承父类(继承可将公共方法抽离出来、提高复用、减少冗余)
class Student extends People {
  number
  private girlfriend
  constructor(name,age,number){
    super(name,age)
    this.number = number
    this.girlfriend = 'xiaoli'
  }
  study(){
    alert(`${this.name} study`)
  }
  getWeight(){
    alert(`weight ${this.weight}`)
  }
}

// let xiaoming = new Student('xiaoming',10,'A1')
// xiaoming.study()
// alert(xiaoming.number)
// xiaoming.eat()
// let xiaohong = new Student('xiaohong',11,'A2')
// xiaohong.study()
// alert(xiaohong.number)
// xiaohong.speak()
let xiaoming = new Student('xiaoming',10,'A1')
xiaoming.getWeight()
// alert(xiaoming.girlfriend)
// alert(xiaoming.weight)


// 封装、数据的权限和保密 public 完全开放    protected 对子类开放    private 对自己开放


// 多态、同一个接口不同实现
// 减少耦合、不该外露的不外露
// 利于数据、接口的权限管理
// ES6 目前不支持、一般认为_开头的属性是private

// 同一个接口、不同表现
// JS应用极少
// 需要结合java等语言的接口、重写、重载等功能