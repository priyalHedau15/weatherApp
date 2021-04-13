const request= require('postman-request');

const forecast = (latitude, longitude, callback) =>{
    const forecastUrl = 'http://api.weatherstack.com/current?access_key=2b80fb100cc9cc8e0b6939b61218eaf0&query='+ latitude +' ,'+longitude +"&unit=f";

    request({url:forecastUrl, json:true}, (error , {body})=>{
        if(error){
            callback("Unable to connect to service!", undefined);
        }
        else if(body.error){
            callback("Unable to find location!", undefined);
        }
        else{
            callback(undefined, "It is "+body.current.temperature+" degrees outside.But feels like "+body.current.feelslike+" degrees .It's "+body.current.weather_descriptions+" outside");
        }

    })
}

module.exports = forecast;