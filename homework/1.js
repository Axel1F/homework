
// Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”
function lowerCase (str) {
    newstr=str[0].toUpperCase()+str.slice(1).toLowerCase()
    console.log(newstr)
}

// Преобразование строки с целью правильно расстановки пробелов.
function correctSpaces(str) {
    const lengthStr=str.length;
    for (let i = 0; i <lengthStr; i++) {
        while (str[i]===' '&str[i+1]===' ')
        str=str.slice(0,i+1)+str.slice(i+2, lengthStr+1)

        while (str[i]===' '&str[i-1]===' ')
        str=str.slice(0,i-1)+str.slice(i, lengthStr+1)

        while (str[i]===' '&str[i+1]===',')
        str=str.slice(0,i-1)+str.slice(i+1, lengthStr+1)
        
        while (str[i]===' '&str[i+1]==='.')
        str=str.slice(0,i)+str.slice(i+1, lengthStr+1)
        
        while (str[i]===','&str[i+1]!==' ')
        str=str.slice(0,i+1)+" "+str.slice(i+1, lengthStr+1)

        while (str[i]==='.'&str[i+1]!==' ')
        str=str.slice(0,i+1)+" "+str.slice(i+1, lengthStr+1)
    }
let correctString =str
console.log(correctString)
}

// Посдчитывающие кол-во слов в строке.
function wordСounting(str) {
    const lengthStr=str.length;
    for (let i = 0; i <lengthStr; i++) {
        while (str[i]===','||str[i]==='.')
        str=str.slice(0,i)+" "+str.slice(i+1, lengthStr+1)
        while (str[i]===' '&str[i+1]===' ')
        str=str.slice(0,i)+str.slice(i+1, lengthStr+1)
        while (str[i]===' '&str[i-1]===' ')
        str=str.slice(0,i-1)+str.slice(i, lengthStr+1)
        str=str.trim()
    }
let quantityWords = str.split(' ').length
console.log(quantityWords)  
}


// Подсчитывающий, уникальные слова. “Текст, в котором слово текст несколько раз встречается и слово тоже” - в ответе, что “слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз“. Самостоятельно придумать наиболее удачную структуру данных для ответа.

function uniqueWords(str){
    const lengthStr = str.length;
    for (let i = 0; i <lengthStr; i++) {
        while (str[i]===','||str[i]==='.')
        str=str.slice(0,i)+" "+str.slice(i+1, lengthStr+1)
        while (str[i]===' '&str[i+1]===' ')
        str=str.slice(0,i)+str.slice(i+1, lengthStr+1)
        while (str[i]===' '&str[i-1]===' ')
        str=str.slice(0,i-1)+str.slice(i, lengthStr+1)
        str=str.trim()
        str=str.toLowerCase()
    }
    let arr=str.split(' ')
    newArr= Array.from(new Set(arr))
    for (let i = 0; i < newArr.length; i++){
    let result = arr.filter(word => word===newArr[i]);
    if (result.length>1&&result.length<5){
        console.log(`Cлово "${newArr[i]}" найдено ${result.length} раза `)
    } else {
        console.log(`Cлово "${newArr[i]}" найдено ${result.length} раз `)
    }
}
}
