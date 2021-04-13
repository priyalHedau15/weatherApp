
const geocode = require("./utilis/geocode");
const forecast = require("./utilis/forecast");

const place = process.argv[2];

if(!place){
    console.log('please provide address!');
}
else{
    geocode(place, (error , {latitude, longitude, location})=>{
        if(error){
           return console.log(error);
    
        }
        
        forecast(latitude,longitude, (error, forecastdata) => {
            if(error){
                return console.log(error);
    
            }
            console.log(location);
            console.log(forecastdata);
            
            
          })
       
       })
}


