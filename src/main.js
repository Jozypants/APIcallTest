import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { GetSwanson } from './ronswanson.js';

$(document).ready(function(){
  

   $("#button").click(function(){
    (async() => {
      let swanSong = new GetSwanson()
      const response = await swanSong.getQuote();
      const gifResponse = await swanSong.getGif();
      console.log(gifResponse)
      $('#output').html(`<img src="${gifResponse}" alt="a random ron gif"><blockquote>"${response[0]}"<footer>-Ron Swanson</footer></blockquote>`);
    })();
   });
   
});

