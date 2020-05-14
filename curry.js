// function add(a,b) {
//     return a + b
// }

// function curry1(fn) {
//     const outerArgs = [].slice.call(arguments, 1)
//     return function() {
//         const innerArgs = [].slice.call(arguments)
//         const args = outerArgs.concat(innerArgs)
//         return fn.call(this, ...args)
//     }
// }

// const addCurry1 = curry1(add,1)
// console.log(addCurry1(2))


// function sub_curry(fn) {
//     return function() {
//         return fn()
//     }
// }

// function curry2(fn,length=4) {
//     return function() {
//         if(length >1) {
//             return curry2(sub_curry(fn), --length)
//         } else {
//             return fn()
//         }
//     }
// }

// function fn0() {
//     console.log(1)
// }

// const fn1 = curry2(fn0)
// fn1()()()()



function curry(fn, outerArgs = []) {
    const length = fn.length || 5 // 默认需要五个参数
    return function(...innerArgs) {
        const args = [...outerArgs, ...innerArgs]
        if(args.length < length) {
            return curry.call(this, fn, args)
        } else {
            return fn.call(this, ...args)
        }
    }
}

function test() {
    return ([].slice.call(arguments,0)).reduce((x,y) => x + y)
}


function test2(...args) {
     return args.reduce((x,y)=> x+y)
}
const testFn = curry(test,1)

console.log(testFn(1,2)(3)(4));

testFn(1)(2)(3)
testFn(1,2,3)
testFn(1)(2,3)
//当前上下文初始化时不存在的变量就是自由变量，