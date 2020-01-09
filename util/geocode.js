const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&limit=1'
    
    request({url,json:true}, (error,{body} = {}) => {
    
        if(error){
            callback('Unable to connect!!!',undefined)
        }
    
        else if(body.features.length === 0){
            callback('wrong input',undefined)
        }
    
        else{
            callback(undefined , {
        latitude : body.features[0].geometry.coordinates[0],
        longitude : body.features[0].geometry.coordinates[1],
        location :  body.features[0].place_name
            })
        }
    })
    }

    module.exports = geocode