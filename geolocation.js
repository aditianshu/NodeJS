const request = require('request')

const geolocation = (address, callback)=>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoiYW5zaHVhZGl0aSIsImEiOiJjazZpODdtYzcxZ2F0M2xwNnU3cjhpZDV0In0.bqwNh8hjgLwZbo-P1VpKcw"

    request({url:url, json:true}, (error,response) => {
        if(error){
            callback('Error in reaching servers', undefined)
        }else if((response.body.features).length === 0){
            callback('No such place found', undefined)
        }
        else{
        callback(undefined,response.body.features[0].geometry.coordinates)
    }
    } )
}



module.exports = geolocation