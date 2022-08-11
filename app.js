var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

    
function clickhandler(){
    outputdiv.innerText = "TRANSLATED:  " + txtInput.value;
};

 btntranslate.addEventListener("click", clickhandler)
 