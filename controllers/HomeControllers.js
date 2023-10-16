'use strict'
const axios = require('axios');
const gis = require('g-i-s');
  


module.exports = {
    search: async(req, res) => {
        let keyword = req.query.q
        var opts = {
            searchTerm: keyword,
            queryStringAddition: '&tbm=isch',
            
          };
        gis(keyword, (error, results) => {
            if(error) {
                res.send({
                    message: "fail",
                });
            } else {
                const transformedData = {};

                results.forEach((item, index) => {
                    transformedData[`url${index + 1}`] = item.url;
                });
                res.send({
                    message: "success",
                    data: transformedData
                });
            }
        });
        
    },
    home: (req, res) => {
        
        res.send({
            message: "success",
            
        });
    },
    
}




 
   



