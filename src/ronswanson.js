

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
}

//Promise{<pending>}
//[[PromiseStatus]]: 'resolved'
//[[PromiseValue]]: ['random quote']