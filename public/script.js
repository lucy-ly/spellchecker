/*global fetch*/
function handleClick(){
  const word = document.getElementById("word").value;
  
  console.log(word);
  fetch("/data.js" + "word=" + word)
    .then(response=>response.text()) // same as .then(function(response) { return response.json(); }) .then(function(myJson) {
    .then(function(response){
      console.log(response);
      document.getElementById("results").innerHTML = response;
    });

}