const quote = document.getElementById("quote")
const author = document.getElementById("author")
const api_url = "https://api.quotable.io/random";

async function getquote(url){
const response = await fetch(url);
var data = await response.json();
quote.innerHTML = data.content;
author.innerHTML = data.author;
}

getquote(api_url);

function tweet(){
  window.open("https://twitter.com/intent/tweet?text= "+ quote.innerHTML +   
  "  --- by " + author.innerHTML, "Tweet window", "width=300" , "height=200");

}

function copyQuote() {
var quote = document.getElementById("quote");
var range = document.createRange();

range.selectNode(quote);
window.getSelection().removeAllRanges();
window.getSelection().addRange(range);
document.execCommand("copy");

}