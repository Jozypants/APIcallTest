

export class GetSwanson {
  async getQuote() {
    try {
      let response = await fetch (`http://ron-swanson-quotes.herokuapp.com/v2/quotes`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else { 
        jsonifiedResponse = false; 
      } 
      return jsonifiedResponse;
    } catch (error) {
      console.log(error);
      return false; 
    }
  }
  async getGif() {
    try {
      let response = await fetch (`https://api.giphy.com/v1/gifs/search?q=ron-swanson&api_key=${process.env.API_KEY}&limit=30&offset=0&rating=G&lang=en`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        let { data} = jsonifiedResponse;
        let randGif = data[Math.floor(Math.random()*29)];
      console.log(jsonifiedResponse)
        let { images:{ original: { url }} } = randGif;
        jsonifiedResponse = url;
      } else { 
        jsonifiedResponse = false; 
      } 
      return jsonifiedResponse;
    } catch (error) {
      console.log("error", error);
      return false; 
    }
  }
}

//Promise{<pending>}
//[[PromiseStatus]]: 'resolved'
//[[PromiseValue]]: ['random quote']