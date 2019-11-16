var htmlThing = document.querySelector("html");
var bodyThing = document.querySelector("body");
var solveButton = document.querySelector("#solve");
var bloodQuestion = document.querySelector("#blood-question");
var introContainer = document.querySelector("#intro");
var bloodText = document.getElementById("bloodtype-text");
var denimQuestion = document.querySelector("#denim-question");
var denimStyles = document.querySelector("#denimStylesContainer").querySelectorAll(".denim");
var cthuluQuestion = document.querySelector("#cthulu-question");
var cthuluYes = document.querySelector("#cthulu-yes");
var grid = document.querySelector("#grid");
var tickerContainer = document.querySelector("#ticker-container");

solveButton.addEventListener("mousedown",beginQuiz);
bloodText.addEventListener("compositionupdate",bloodTest);
bloodText.addEventListener("keydown", keyInput);
cthuluYes.addEventListener("mousedown", sheSaidYes);

for (i = 0; i < denimStyles.length; i++){
    denimStyles[i].addEventListener("mousedown", choseDenim);
    console.log(denimStyles[i])
}

function keyInput(event){
    if(event.keyCode === 13)
    {
        if(bloodDrawn()){
            askDenim();
        }
    }
}

function blurAll(){
    var tmp = document.createElement("input");
    document.body.appendChild(tmp);
    tmp.focus();
    document.body.removeChild(tmp);
}

function bloodDrawn(){
    if (bloodText.value.length > 1){
        return true;
    } else {
        return false;
    }
}

function blurAll(){
 var tmp = document.createElement("input");
 document.body.appendChild(tmp);
 tmp.focus();
 document.body.removeChild(tmp);
}

function bloodTest(){

}

function beginQuiz()
{
    console.log("it has begun")
    introContainer.style.display = "none";
    bloodQuestion.style.display = "block";
}

function askDenim(){
    console.log("putting on pants")
    blurAll();  //this makes sure the focus isn't on the blood-text input
                //after we hide it.
                //just in case
    bloodQuestion.style.display = "none";
    denimQuestion.style.display = "block";
}

function choseDenim(){
    event.currentTarget.classList.add("denim-selected");
    denimQuestion.style.display = "none";
    cthuluQuestion.style.display = "block";
}

function sheSaidYes(){
    console.log("she said yes!");
    cthuluQuestion.style.display = "none";
    tickerContainer.style.display = "block";
    grid.style.display = "block";
    bodyThing.style.backgroundColor = "black";
    htmlThing.style.backgroundColor = "black";
    go();
}