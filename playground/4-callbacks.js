// setTimeout(() => {
//     console.log('Two second timer')
// }, 2000);

// const name = ['andrew' , 'jen' , 'jess']
// const shortnames = name.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude : 0,
//             longitude : 0
//         }
//         callback(data)
//     }, 2000);
// }

// geocode('philadelphia',(data) => {
//     console.log(data)
// }) 


const add = (a,b,callback) => {
    setTimeout(() => {
        const c = a+b
        callback(c)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})