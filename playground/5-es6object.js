//object property short hand

const name = 'Raj'
const age = 19

const user = {
    name,
    age,
    location :'naroda'
}

console.log(user)

//object destructuring

const product = {
    label : 'Red Notebook',
    price : 20,
    stock : 201,
    saleprice : undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productlabel,stock,rating = '5 star'} = product
// console.log(productlabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label=1567,stock=0 }= {}) => {
    console.log(type,label,stock)
}

transaction('order',product)