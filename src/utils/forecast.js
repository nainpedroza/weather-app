const request = require('postman-request')

const forecast = (lat, long,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=848d6599abab78d9632c66f71fcba3a2&query='+lat+','+long+'&units=m'
    request({ url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location, try another aaaasearch.',undefined)
        } else {
             callback(undefined, body.current.weather_descriptions + " and it is currently " + body.current.temperature + ' and it is ' + body.current.precip+'% of rain. The humidity is '+body.current.humidity+'%.')
        }
    })
}

module.exports = forecast


            //     descriptions: body.current.weather_descriptions,
            //     temp: body.current.temperature,
            //     precip: body.current.precip,
            //     location: body.location.name
            // })