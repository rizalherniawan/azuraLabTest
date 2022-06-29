function calculator(str){
    let arr = str.split(' ')
    const a = parseInt(arr[0])
    const b = parseInt(arr[2])
    const operator = arr[1]
    if(operator === '+') return a + b
    else if(operator === '-') return a - b
    else if(operator === '*') return a * b
    else return a / b
}


