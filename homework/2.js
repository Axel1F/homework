// Написать модуль, который способен выполнять операции с числами любой длины.4 метода для сложения, умножения, вычитания и деления.

// Сложение чисел любой длины
function bigSum(a,b) {
    if (a.length < b.length) {
        let diff = b.length - a.length
        for (let i = 0; i < diff; i++) {
            a = '0' + b;
        }
    } else if (a.length > b.length) {
        let diff = a.length - b.length
        for (let i = 0; i < diff; i++) {
            b = '0' + b;
        }
    } 
        let carry = false;
        let summ = '';
        let temp = '';
        let digit;
        let plusOne = '';
        for (let i = 0; i < b.length; i++) {
            if (carry) {
                plusOne = sum(a[a.length -1 - i],'1');
                temp = sum(plusOne, b[b.length -1 - i]);
            } else {
                temp = sum(a[a.length -1 - i], b[b.length -1 - i]);
            }
            if (temp.length == 1) {
                summ = temp + summ;
                carry = false;
            } else {
                carry = true;
                digit = temp[1];
                summ = digit + summ;
            }
        }
        if (carry) {
            summ = '1' + summ;
        } 
        return(summ);
    }
    
// Вычитание чисел любой длины
function bigSubtraction(a, b) {
     if (a.length < b.length) {
        let diff = b.length - a.length
        for (let i = 0; i < diff; i++) {
            a = '0' + b;
        }
    } else if (a.length > b.length) {
        let diff = a.length - b.length
        for (let i = 0; i < diff; i++) {
            b = '0' + b;
        }
    } 
    let result;
    if (a > b) {
        
        result = subtractSmallForGreat(a, b);
        if (result.startsWith('0') && result.length > 1) result = result.slice(1);
    } else if (b > a) {
        result = subtractSmallForGreat(b, a);
        if (result.startsWith('0')) result = result.slice(1);
        result = '-' + result;
    } else {
        result = '0';
    }
    return result;
}

// Умножение чисел любой длины
function bigMultiplication(a, b) {
     if (a.length < b.length) {
        let temp = a;
        a = b;
        b = temp;
    }
    let lengthB = b.length - 1;
    let result = '0';
    let temp = '';
    for (let i = lengthB; i >= 0; i--) {
        temp = multiplication(a, b[i]);
        for (let j = 0; j < lengthB - i; j++) {
            temp = temp + '0';
        }
        result = bigSum(result, temp);
    }

    return result;
}

// Деление чисел любой длины
function bigDivision(a, b) {
    let result = '0';
    let temp = '';
    for (let i=0; i<a.length; i++){       
        temp += a[i];
        let r = '0';
        if (temp.length >= b.length){
            r = division (temp, b);
            temp = bigSubtraction(temp, multiplication(b, r));
        }
        result += r;       
    }
    while (result.startsWith('0') && result.length > 1) result = result.slice(1);
    return result;
}


// Сложение 
function sum(a, b) {
    let result = parseInt(a) + parseInt(b);
    return String(result);
}

// Вычитание 
function subtraction(a, b) {
    let result = parseInt(a) - parseInt(b);
    return String(result);
}

// Умножение 
function multiplication(a, b) {
    if (b == '0') return '0';
    let result = a;
    for (let i = 1; i < parseInt(b); i++) {
        result = bigSum(result, a);
    }
    return result;
}

// Деление
function division(a, b) {
    let counter = 0;
    let lengthRatio
    if (a.length > b.length) lengthRatio = 1;
    if (b.length > a.length) lengthRatio = -1;
    if (lengthRatio == 1) {
        let ratio = a.length - b.length;
        for (let i = 0; i < ratio; i++) {
            b = '0' + b;
        }
    } else if (lengthRatio == -1) {
        let ratio = b.length - a.length;
        for (let i = 0; i < ratio; i++) {
            a = '0' + a;
        }
    }
    while (a >= b) {
        a = bigSubtraction(a, b);
        counter++;
    }
    return String(counter);
}

// Вычитание меньшего числа из большего
function subtractSmallForGreat(a, b) {
    let transfer = false;
    let result = '';
    let temp = '';
    let plusOne = '';
    let lengthA = a.length - 1;
    for (let i = lengthA; i >= 0; i--) {
        if (transfer) {
            plusOne = sum(b[i], '1');
            transfer = false;
            if (plusOne == '10') {
                temp = a[i];
                transfer = true;
            } else {
                temp = subtraction(a[i], plusOne);
            }
        } else {
            temp = subtraction(a[i], b[i]);
        }
        if (temp.startsWith('-')) {
            transfer = true;
            result = reverseMinus(temp) + result;
        } else {
            result = temp + result;
        }
    }
    return result;
}

// Реверсе отрицательных чисел
function reverseMinus(a) {
    var result = 10 + +a;
    return String(result);
}


let a = '12122222222215454321111111111111111111111111111111113132222222222221';
let b = '534354444444444444444444444444444444444444444444'

console.log(bigSum(a, b))
console.log(bigSubtraction(a, b)); 
console.log(bigMultiplication(a, b)); 
console.log(bigDivision(a, b));