import links from "./data_web.js";

// go to random website
const getButton = document.getElementById("go");

getButton.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * links.length);
  console.log(links[randomNumber]);

  window.open(links[randomNumber], "_blank");
});

// copyright year
let year = new Date();
let copyrightYear = year.getFullYear();
const copyright = document.getElementById("year");
copyright.innerHTML = copyrightYear;
