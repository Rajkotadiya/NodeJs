const request = require("request")
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address) {
      return console.log('Please provide an address')
}
geocode (address, (error, {location}) => {
      if (error) {
            return console.log(error)
      }
      forecast( address, (error, forecastdata) => {
            if (error) {
                  return console.log(error)
            }

            console.log(location)
            console.log(forecastdata)
      })
})



// This is by instructor 
//  but this is not workin in my laptop
// so above code is created by me.
//So you have to also change in forecast.js
// geocode ('Naroda Ahmedabad', (error, data) => {
//       console.log('Error',error)
//       console.log('Data',data)

//       forecast(data.latitude, data.longtitude, (error, data) => {
//             console.log('Error', error)
//             console.log('Data', data)
//       })
// })

