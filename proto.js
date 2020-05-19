function Person() {

}

var p = new Person()

Person.prototype = {
  constructor:Person,
  name: 'xx',
  sayName:function() {
    console.log(this.name)
  }
}
var p2 = new Person()
p2.sayName()