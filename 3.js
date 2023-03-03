// Создать класс данных “Товар”
class Product {
    constructor(name, price, quantity, description) {
        this.name = name; 
        this.price = price; 
        this.quantity = quantity;
        this.description = description; 
    }
}

// фильтр (название содержит)
function filterNameContains(products, value) {
    return products.filter(product => product.name.includes(value));
}
// фильтр (название начинается)
function filterNameStarts(products, value) {
    return products.filter(product => product.name.startsWith(value));
}
// фильтр (название заканчивается)
function filterNameEnds(products, value) {
    return products.filter(product => product.name.endsWith(value));
}


// фильтр (Описание содержит)
function filterDescriptionContains(products, value) {
    return products.filter(product => product.description.includes(value));
}
// фильтр (Описание начинается)
function filterDescriptionStarts(products, value) {
    return products.filter(product => product.description.startsWith(value));
}
// фильтр (Описание заканчивается)
function filterDescriptionEnds(products, value) {
    return products.filter(product => product.description.endsWith(value));
}


// фильтр (цена меньше)
function filterPriceLess(products, value) {
    return products.filter(product => product.price < value);
}
// фильтр (цена равно)
function filterPriceEqually(products, value) {
    return products.filter(product => product.price = value);
}
// фильтр (цена больше)
function filterPriceMore(products, value) {
    return products.filter(product => product.price > value);
}
// фильтр (цена меньше или равно)
function filterPriceLessOrEqually(products, value) {
    return products.filter(product => product.price <= value);
}
// фильтр (цена больше или равно)
function filterPriceMoreOrEqually(products, value) {
    return products.filter(product => product.price >= value);
}


// фильтр (Количество меньше)
function filterQuantityLess(products, value) {
    return products.filter(product => product.quantity < value);
}
// фильтр (Количество равно)
function filterQuantityEqually(products, value) {
    return products.filter(product => product.quantity = value);
}
// фильтр (Количество больше)
function filterQuantityMore(products, value) {
    return products.filter(product => product.quantity > value);
}
// фильтр (Количество меньше или равно)
function filterQuantityLessOrEqually(products, value) {
    return products.filter(product => product.quantity <= value);
}
// фильтр (Количество больше или равно)
function filterQuantityMoreOrEqually(products, value) {
    return products.filter(product => product.quantity >= value);
}

// Поиск товаров по  характеристикам (Название,Цена,Количество,Описание)
function filterForProducts(stringFilter) {
    let result = Array.from(products);
    const filterValues = stringFilter.split('&');
    for (let Value of  filterValues) {
        let i = Value.split('-');
      
// фильтр по названию
        if (i[0] == 'name') {
            if (i[1] == 'contains') {
                result = filterNameContains(result, i[2]);
            }
            if (i[1] == 'starts') {
                result = filterNameStarts(result, i[2]);
            }
            if (i[1] == 'ends') {
                result = filterNameEnds(result, i[2]);
            }
        }

// фильтр по цене
        if (i[0] == 'price') {
            if (i[1].startsWith('>')) {
                if (i[1].startsWith('>=')) {
                    result = filterPriceMoreOrEqually(result, +i[1].slice(2));
                } else {
                    result = filterPriceMore(result, +i[1].slice(1));
                }
            }
            if (i[1].startsWith('<')) {
                if (i[1].startsWith('<=')) {
                    result = filterPriceLessOrEqually(result, +i[1].slice(2));
                } else {
                    result = filterPriceLess(result, +i[1].slice(1));
                }
            }
            if (i[1].startsWith('=')) {
                result = filterPriceEqually(result, +i[1].slice(1));
            }
        }
// фильтр по количеству
        if (i[0] == 'quantity') {
            if (i[1].startsWith('>')) {
                if (i[1].startsWith('>=')) {
                    result = filterQuantityMoreOrEqually(result, +i[1].slice(2));
                } else {
                    result = filterQuantityMore(result, +i[1].slice(1));
                }
            }
            if (i[1].startsWith('<')) {
                if (i[1].startsWith('<=')) {
                    result = filterQuantityLessOrEqually(result, +i[1].slice(2));
                } else {
                    result = filterQuantityLess(result, +i[1].slice(1));
                }
            }
            if (i[1].startsWith('=')) {
                result = filterQuantityEqually(result, +i[1].slice(1));
            }
        }

// фильтр по описанию
        if (i[0] == 'description') {
            if (i[1] == 'contains') {
                result = filterDescriptionContains(result, i[2]);
            }
            if (i[1] == 'starts') {
            result = filterDescriptionStarts(result, i[2]);
        }
            if (i[1] == 'ends') {
                result = filterDescriptionEnds(result, i[2]);
            }
        }
    }
    return result;
  
}
    
