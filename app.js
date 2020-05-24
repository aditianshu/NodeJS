const request = require('request')
const geolocation = require('./geolocation')
const temperature = require('./temp')

const loc = process.argv[2]

if(loc == undefined){
    console.log("Not defined")
} else{
    console.log(loc)

    geolocation(loc, (error,data) => {
        if (error){ 
            console.log(error)
        }else{
            temperature(data, (error,dataf)=>
            {
                if(error){
                    console.log(error)
                }else{
                    temperature(data,  (error,dataf)=>
        {
            if(error){
                console.log(error)
            }else{
                console.log(dataf)
            }
        })
                }
            })
        }
        
    })
}


