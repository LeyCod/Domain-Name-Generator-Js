/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "my", "your"];
  let adj = ["great", "brave", "awesome", "clever"];
  let noun = ["computer", "data", "system", "software"];
  let dom = [".com", ".es", ".net"];
  let domIndx = 0;

  pronoun.forEach(pronoun => {
    adj.forEach(adj => {
      noun.forEach(noun => {
        domIndx = Math.floor(Math.random() * dom.length);
        document.getElementById(
          "root"
        ).innerHTML += `${pronoun}${adj}${noun}${dom[domIndx]}<br>`;
      });
    });
  });
};
