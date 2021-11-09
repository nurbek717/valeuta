var elForm = document.getElementById("form");
var elInput = document.getElementById("input");
var elSelect = document.getElementById("select");

Math.round(dollar, evro, rubil)

var elTettli = document.getElementById("tettli");


console.log(elForm, elInput, elSelect);


var dollar =  10693.00;
var evro =  12362.18;
var rubil = 149.77; 

var resald = "";

var elSelect = document.getElementById("select");
var elButtan = document.getElementById("button");

elForm.addEventListener('submit', function(evt){
 evt.preventDefault();
 
 var inputAmound = elInput.value;
 var inputSelectType = elSelect.value;

   if  (inputSelectType == "usd" ){
    resald = Math.floor (inputAmound / dollar)
    elTettli.textContent = resald
   }
   if  (inputSelectType == "rub" ){
    resald = Math.floor (inputAmound / rubil) 
    elTettli.textContent = resald
   }
   if  (inputSelectType == "eur" ){
    resald = Math.floor (inputAmound / evro) 
    elTettli.textContent = resald
    alert(resald)
   }
 
 
})