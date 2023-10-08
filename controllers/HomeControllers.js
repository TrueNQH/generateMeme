'use strict'

let crawlImageData = require("./crawlData")

module.exports = {
    search: async(req, res) => {
        let url = 'https://www.google.com/search?q=meme+g%E1%BA%A5u_pinterest&tbm=isch'
        let response = await crawlImageData(url)
        res.send({
            message: "success",
            data: response
           
        });
    },
    home: (req, res) => {
        
        res.send({
            message: "success",
            
        });
    },
    
}
