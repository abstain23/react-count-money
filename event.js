/* console.log(1)
process.nextTick(() => {
  console.log(8)
  setTimeout(() => {
    console.log(9)
  })
})
setTimeout(() => {
  console.log(2)
  new Promise(() => {
    console.log(11)
  })
})
let promise = new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log(10)
  })
  resolve()
  console.log(4)
})
fn()
console.log(3)
promise.then(() => {
  console.log(12)
})
function fn(){
  console.log(6)
}
 */
/**
 * 主代码执行 ： 1 遇见微任务nexttick 加入队列 遇到settime宏任务加入对列（2）（10） 4  6 3 promise 8 
 * 
 * 任务队列
 * 微任务 nexttick set9  promise 
 * 宏任务 2 10 9 
 * 
 * 1 4 6 3 8 12 2 11 10 9 
 */
// setImmediate(function(){
//   console.log(1);
// },0);
// setTimeout(function(){
//   console.log(2);
// },0);
// new Promise(function(resolve){
//   console.log(3);
//   resolve();
//   console.log(4);
// }).then(function(){
//   console.log(5);
// });
// console.log(6);
// process.nextTick(function(){
//   console.log(7);
// });
// console.log(8);



// new Promise((resolve) => {
//   console.log(1);
  
//   process.nextTick(() => {
//     console.log(2);
//   });
  
//   resolve();
  
//   process.nextTick(() => {
//     console.log(3);
//   });
  
//   console.log(4);
// }).then(() => {
//   console.log(5);
// });

// setTimeout(() => {
//   console.log(6);
// }, 0);

// console.log(7);



/*

const fs = require('fs')

fs.readFile('./curry.js',() => {
  setTimeout(() => {
    console.log('tim')
  })
  setImmediate(() => {
    console.log('im')
  })
  // 在i/o操作中 setImmediate 永远优先于 setTimeout
})
*/

// 基于不同性能的机器 以下两个的输出不一样

// setImmediate(() => {
//   console.log('y')
// })

// setTimeout(()=> {
//   console.log('x')
// })



console.log('global'); //1

setTimeout(function() {
    console.log('setTimeout1');
    new Promise(function(resolve) {
        console.log('setTimeout1_promise');
        resolve();
    }).then(function() {
        console.log('setTimeout1_promiseThen')
    })
    process.nextTick(function() {
        console.log('setTimeout1_nextTick');
    })
},0)

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promiseThen1')
})

setImmediate(function() {
    console.log('setImmediate');
})

process.nextTick(function() {
    console.log('nextTick');
})

new Promise(function(resolve) {
    console.log('promise2');
    resolve();
}).then(function() {
    console.log('promiseThen2')
})

setTimeout(function() {
    console.log('setTimeout2');
},0)
