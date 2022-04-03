const goods = {
    1: {
        id: 1,
        name: 'Шапка',
        description: 'Some description',
        sizes: [1, 2, 3],
        price: 120,
        available: true,
    },
    2: {
        id: 2,
        name: 'Шорты',
        description: 'Some description',
        sizes: [1, 2, 3],
        price: 140,
        available: false,
    },
    3: {
        id: 3,
        name: 'Штыны',
        description: 'Some description',
        sizes: [1, 2, 3],
        price: 200,
        available: true,
    },
    4: {
        id: 4,
        name: 'Футболка',
        description: 'Some description',
        sizes: [1, 2, 3],
        price: 150,
        available: true,
    },
    5: {
        id: 5,
        name: 'Куртка',
        description: 'Some description',
        sizes: [1, 2, 3],
        price: 400,
        available: false,
    },
}

const goodsIndex = [goods[0], goods[1], goods[2], goods[3], goods[4]]

const basket = [
    {
        good: goods[1].id,
        amount: 2,
    },
    {
        good: goods[3].id,
        amount: 4,
    },
]


function addGoodinBasket(id, size, amount) {
    for(let i = 1; i <= goodsIndex.length; i++) {
        if (id === goods[i].id && size in goods[i].sizes && goods[i].available){
            basket.push({'good': goods[i].id, 'amount': amount})
        }
    }
}

// addGoodinBasket(4,1,1)


function deleteGoodfromBasket(id) {
    for(let j = 0; j < basket.length; j++) {
        if (basket[j].good === id){
            delete basket[j]
        }
    }
}

// deleteGoodfromBasket(4)


function cleanBasket() {
    for(let j = 0; j < basket.length; j++) {
        delete basket[j]
    }
}

// cleanBasket()


function totalPrice() {
    let n = 0
    let s = 0
    for(let j = 0; j < basket.length; j++) {
        n += basket[j].amount
        for(let i = 1; i <= goodsIndex.length; i++) {
            if (basket[j].good === goods[i].id) {
                s += goods[i].price * basket[j].amount
            }
        }
    }
    return res = {
        totalAmount: n,
        totalSumm: s,
    }
}

let sum = totalPrice()

console.log(basket)
console.log(sum)





