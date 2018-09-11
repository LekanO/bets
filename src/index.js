import style from "./main.css";

const app = document.getElementById('app');
console.log( app)
var totalSheets =0;


var fullDataSheet =  fetch('https://spreadsheets.google.com/feeds/worksheets/1Jx5a6xuBOc_zmw1nncwRjsjNEs9a6VqPanV5a8JMTrQ/public/full?alt=json').then(function(response){ 
         return response.json()
}).then(data => {

  totalSheets=data.feed.entry.length;
  console.log('DATA:', totalSheets);


  for(var i=1;i<=totalSheets;i++){

   var allData = fetch(
  "https://spreadsheets.google.com/feeds/list/1Jx5a6xuBOc_zmw1nncwRjsjNEs9a6VqPanV5a8JMTrQ/"+i+"/public/values?alt=json");

  allData.then(response => {
    return response.json();
  })
  .then(data => {


    // Work with JSON data here
    console.log('DATA:', data.feed.entry);
    const entries = data.feed.entry;
    const listEntries = entries.map(entry => {
      const widget = `<div class="left-side">
      <div class="landing-header">
        <div class="landing-header-left">
            <div class="landing-header-left-logo">
              <img src="./img/coral-logo.svg" alt="coral-bets">
              <span class="logo-tnc"> T&Cs apply </span>
            </div>
            <ul class="landing-list">
                <li>  ${entry.gsx$bullets.$t} </li>
            </ul>
          </div>
          <div class="landing-header-right">
            <div class="landing-header-offer">
            <h3> ${entry.gsx$offer.$t} </h3>
          </div>
          <div class="landing-header-claim">
              <a class="effect" href="#"> ${entry.gsx$cta.$t} </a>
            <img class="gambleaware" src="./img/gambleaware.svg" alt="gambleaware">
          </div>
        </div>            
      </div>
      </div>
      <div class="landing-body">
        <div class="landing-body-bottom">
          <p class="landing-footer"> ${entry.gsx$termsandconditions.$t} </p>
        </div>
      </div>`;
      app.innerHTML += widget;
    });
  })
  .catch(err => {
    // Do something for an error here
  });


}


})





