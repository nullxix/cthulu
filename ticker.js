
var ticker = document.querySelector("#ticker");
var solvingText =document.querySelector(".solving-text");
var tickInterval = 500;

setInterval(tickAway, tickInterval)
var  tickThird = 0;

function tickAway(){
    addTick(generateTick());
    if (tickThird < 3)
    {
        solvingText.innerHTML += " .";
        tickThird++;
    } else {
        solvingText.innerHTML = "Solving";
        tickThird = 0;
    }
}

function scrollToBottom()
{
    ticker.scrollTop = ticker.scrollHeight - ticker.clientHeight;
}

function addTick(tick){

    if(typeof(tick) === "string")
    { 
        ticker.innerHTML += tick;
        scrollToBottom();
    }
    else {
        console.log("Attempted to add tick that isn't a string. Naughty naughty. " + tick)
    }
}

function generateTick(){

    var tickGenerators = [
        lineOpener,
        stringOfNumbers,
        pingRequest,
        pingRequest,
        pingRequest,
        pingRequest,
        columnOfNumbers,
        wordArt,
        stringOfCharacters,
        boxDiagram,
        boxDiagram,
        boxDiagram,
        colorTick,
        colorTick,
        colorTick,
        colorTick,
        colorTick,
        colorTick,
        colorTick,
        colorTick,
        colorTick,
        colorTick,
        colorTick,
        colorTick,

    ];
    var tickIndex = Math.floor(Math.random() * tickGenerators.length);
    tick = tickGenerators[tickIndex]();
    return tick;
}

function colorTick(){
    var colorz = [
        "red",
        "blue",
        "green",
        "yellow",
        "white",
    ]
    col = returnRandom(colorz);
    var colTick = "<div style=\"color: " + col +";>" + generateTick() + "</div>";
    return colTick;
}

function stringLine()
{
    return lineOpener() + stringOfNumbers();
}
function stringOfNumbers(){
    var num = (Math.floor(Math.random() * 99)) + "";
    return num + num + num + num + num + num + "<br>";
}

function lineOpener(){
    var openers = [
        "####",
        "====",
      "||-|:",
        "-->?",
        "--()"
    ];
    var i = Math.floor(Math.random()*openers.length);
    return openers[i];
}

function columnOfNumbers(){
    var opener = lineOpener();
    var count = 6 + (Math.random()*6);
    var str = opener + stringOfNumbers();
    for(i = 0; i < count; i++)
    {
        str += opener + stringOfNumbers();
    }
    return str;
}

function randomChar()
{
    var char = "";
     if (Math.random() > 0.5) {
        char = Math.random().toString(36).replace(/[^a-z]+/g, '');
     } else {
         char = Math.floor(Math.random()*10);
     }
    return char;
}


function randomString(length){
    var str = "";
    for(i = 0; i < length; i++)
    {
        str += randomChar();
    }
    return str;
}

function stringOfCharacters(){
    return randomString(36);
}

function wordArt(){
    var theArt = [
        "jfu3ghuojn bu4eugkjb <br> rb9 Uint32Array4t",
         "=================================================================================================",
         "<br> <hr> <br>",
         "<br><div style=\"background-color: red; height: 24px; width: 24px; margin: 10px; display: inline-block;\"> </div><div style=\"background-color: red; height: 24px; width: 24px; margin: 10px; display: inline-block;\"> </div><div style=\"background-color: red; height: 24px; width: 24px; margin: 10px; display: inline-block;\"> </div><div style=\"background-color: red; height: 24px; width: 24px; margin: 10px; display: inline-block;\"> </div><div style=\"background-color: red; height: 24px; width: 24px; margin: 10px; display: inline-block;\"> </div><div style=\"background-color: red; height: 24px; width: 24px; margin: 10px; display: inline-block;\"> </div><div style=\"background-color: red; height: 24px; width: 24px; margin: 10px; display: inline-block;\"> </div><div style=\"background-color: red; height: 24px; width: 24px; margin: 10px; display: inline-block;\"> </div><div style=\"background-color: red; height: 24px; width: 24px; margin: 10px; display: inline-block;\"> </div>",
         "<br> <br> <br> <br> <br>"]
    return returnRandom(theArt);
}


function returnRandom(ar)
{
    var i = Math.floor(Math.random()*ar.length);
    return ar[i];
}

function pingRequest(){
    var str = "<br> [--- " + Math.floor(Math.random()*1000) + " -] Req: " + randomString(4) + " B: " + randomChar() + ":" +randomChar() +":" + randomChar() + "-><-" + Math.random() *10;
    return str;
}

function boxDiagram(){
    var length = Math.floor(Math.random()*6);
    var str = "<br> [ " + randomString(length) + " X " + randInt() + ":" + randInt() + ":" + randInt() +" ] <br> |  Frt__X: " + randomString(length) + "| <br> [ " + randomString(length) + " X__Frt] ";
    return str;
}

function randInt()
{
    return Math.floor(Math.random()*9);
}
