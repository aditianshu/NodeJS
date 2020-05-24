const request = require('request')

const temperature = (address,callback) =>{
    const lat = address[1]
    const longi = address[0]
    const url = 'https://api.darksky.net/forecast/fd28dcef11f09cbbebaa77c374921c9e/'+lat+','+longi+'?unit=si'

    request({
        url:url, json: true
        }, (error, response) => {
            if(error){
                callback("Can't reach servers",undefined)
            }
            else{
            
            callback(undefined,response.body.currently.temperature)}
        }
    )

    }

    
        
module.exports = temperature