var grid = document.querySelector("#grid");
var ctx = grid.getContext("2d");
ctx.fillStyle = "#000000";
//ctx.fillRect(0,0,150,75);


//array of draw points
//every line is drawn from one of these points to another point
//every line drawn is added to a (local) database, so it can later be erased
//a line is erased at the next draw period unless it is cemented
//when it is cemented the next origin is moved to it's destination


//create array of draw points
//select first origin

//start seeker co-routine

//draw a line
//seek
//choose seek points
//decide if keep
//if keep
//cement line
//move origin
//else
//erase old seeker
//re-seek

//randomly 
//erase an old cemented line
//trigger a split event (if less than 5 seekers)
//trigger a death event (if more than 1 seeker)

//move origin 
//select a few random seek points (12-20): we want to check each one several times

//database cleanup
//database has a max size
//clean-up oldest lines if it reaches this size





var strokeColor = "#aa1111";
var backgroundColor = "#000000";
var pointArray = [];
var seekerArray = [];
var arraySize = 1000;
var seekOrigin;
var maxSeekerDistance = 250;
var allowSeekerDistanceVariability = false;

var begin = {
    x: 1,
    y: 1,
};

var end = {
    x: 100,
    y: 100,
}



function go() {
    buildArray();
    seekOrigin = chooseRandomPoint();
    buildSeekerArray();
    setInterval(seek, 150);
}

//SEEKING
function seek() {
    randomDestination = seekerArray[Math.floor(Math.random() * seekerArray.length)];

    drawLine(seekOrigin, randomDestination)

    var rand = Math.random();

    if (rand < 0.3) {
        strokeColor = randomColor();
    }

    if (rand < 0.1) {
        seekOrigin = randomDestination;
        buildSeekerArray();

    } else {
        setTimeout(function () {
            eraseLine(seekOrigin, randomDestination);
        }, 1000)
    }
}




//function build array

function buildArray() {
    var h = grid.clientHeight;
    var w = grid.clientWidth;

    for (i = 0; i < arraySize; i++) {
        var point = {
            x: 0,
            y: 0
        };
        var rand = Math.random();
        var rand2 = Math.random();
        point.x = Math.floor(rand * w);
        point.y = Math.floor(rand2 * h);
        pointArray[pointArray.length] = point;

        console.log(pointArray)
        console.log(point.x + " " + rand + " " + rand2 + " " + h + " " + w);
    }

    console.log(pointArray)
}

function buildSeekerArray() {
    var seekerArraySize = 50;
    for (i = 0; i < seekerArraySize; i++) {

        var newPoint;

        //make sure that the newpoint is kinda close maybe perhaps
        var acceptable = false;
        while (!acceptable) {
            newPoint = chooseRandomPoint();
            if (
                Math.abs(seekOrigin.x - newPoint.x) < maxSeekerDistance
                && Math.abs(seekOrigin.y - newPoint.y) < maxSeekerDistance) {
                acceptable = true;
            }
        }
        seekerArray.push(newPoint);
    }
}

function chooseRandomPoint() {
    var point = pointArray[Math.floor(Math.random() * pointArray.length)];
    return point;
}

//function cementLine


//function newOrigin


//function chooseSeekPoints

//function split


//function killOldCement

//function drawLine
function sketch(origin, destination, clr) {

    ctx.beginPath();
    ctx.strokeStyle = clr;
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(destination.x, destination.y);
    ctx.stroke();

}

function drawLine(origin, destination) {

    sketch(origin, destination, strokeColor);

}


//function eraseLine
function eraseLine(origin, destination) {
    sketch(origin, destination, backgroundColor);
    sketch(destination, origin, backgroundColor);
    sketch(origin, destination, backgroundColor);
    sketch(destination, origin, backgroundColor);
    sketch(origin, destination, backgroundColor);
    sketch(destination, origin, backgroundColor);
}


function secureMathRandom() {
    // Divide a random UInt32 by the maximum value (2^32 -1) to get a result between 0 and 1
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
}

function randomColor() {
    var randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randColor;
}