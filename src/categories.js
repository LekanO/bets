import style from "./main.css";

const app = document.getElementById('app');
console.log( app)
// Fetching spreadsheet
fetch(
  "https://spreadsheets.google.com/feeds/worksheets/1Jx5a6xuBOc_zmw1nncwRjsjNEs9a6VqPanV5a8JMTrQ/public/full?alt=json")
  .then(response => {
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
      console.log()

  })
  .catch(err => {
    // Do something for an error here
  });
