// const sq = function (x) {
//     return x * x
// }

const { eventNames } = require("cluster")

// const sq = (x) => {
//     return x * x
// }

// const sq = (x) => x * x

// console.log(sq(2))

const event = {
    name: 'Birthday party',
    guestList: ['Raj', 'jay', 'Satish'],
    printGuestlist() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach( (guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestlist()