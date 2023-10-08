const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://pinterest-pin-search.p.rapidapi.com/',
  params: {
    r: 'search/pinterest',
    keyword: 'meme gấu trúc',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '710a3075f3msha1d85596b3c13dcp1b49f7jsnd750f7fc9fa7',
    'X-RapidAPI-Host': 'pinterest-pin-search.p.rapidapi.com'
  }
};
async function fetchData() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Gọi hàm fetchData để thực hiện công việc
  fetchData();