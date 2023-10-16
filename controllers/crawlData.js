const unirest = require("unirest");
const cheerio = require("cheerio");
let images_results = {};
let id=1;
 const  getImagesData = async () => {
    const selectRandom = () => {
    const userAgents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
    ];
    var randomNumber = Math.floor(Math.random() * userAgents.length);
    return userAgents[randomNumber];
    };
    let user_agent = selectRandom();
    let header = {
    "User-Agent": `${user_agent}`,
    };
    return await unirest
    .get(
        "https://www.google.com/search?q=cute+cat+pinterest&hl=en&tbm=isch&asearch=ichunk&async=_id:rg_s,_pms:s,_fmt:pc&sourceid=chrome&ie=UTF-8"
    )
    .headers(header)
    .then((response) => {
        let $ = cheerio.load(response.body);

        
        $("div.rg_bx").each((i, el) => {
            let json_string = $(el).find(".rg_meta").text();
            let imageObj = {
                original: JSON.parse(json_string).ou,
                thumbnail: $(el).find(".rg_l img").attr("src") ? $(el).find(".rg_l img").attr("src") : $(el).find(".rg_l img").attr("data-src"),
            };
        
            // Tạo tên thuộc tính động (original1, thumbnail1, original2, thumbnail2, ...)
            images_results[`original${i + 1}`] = imageObj.original;
            images_results[`thumbnail${i + 1}`] = imageObj.thumbnail;
        });

        
    });
};

getImagesData();        
module.exports = {
  getImagesData: (req, res) => {
    res.send(images_results)
  }
}



   
    
    
   
    
