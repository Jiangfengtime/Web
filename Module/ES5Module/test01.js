// 1. 定义成员：

const sum = function(a,b){
    return parseInt(a) + parseInt(b)
}
const subtract = function(a,b){
    return parseInt(a) - parseInt(b)
}
const multiply = function(a,b){
    return parseInt(a) * parseInt(b)
}
const divide = function(a,b){
    return parseInt(a) / parseInt(b)
}

// 2. 导出成员：
// 默认情况: 方法无法被外部调用, 需要先导出
module.exports = {
    sum: sum,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}