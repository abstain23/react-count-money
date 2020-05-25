/**
 * new
 */

function myNew(Constrouctor, ...args) {
  //  const obj = {}
  //  obj.__proto__ = Constrouctor.prototype
  const obj = Object.create(Constrouctor)
  const res = Constrouctor.call(obj, ...args)
  return ((typeof res !== 'null' && typeof res === 'object') || (typeof res === 'function')) ? res : obj
}

function Fn(name, age) {
  this.name = name
  this.age = age
  //  return () => {}
}

var a = new Fn('cc', 18)
console.log(a)

