const lines = 150;

let arr = [];
let n = arr.length;
let i = 0;
let j = 0;

function setup() {
    createCanvas(800, 400);
    for(let x = 0; x < lines; x++) {
        arr.push( random(100) + 10 );
    }
    n  = arr.length;
    fill(235, 180, 235);
}

function draw() {
// var looper = setInterval(() => {
    background(128);
    if(j >= n-i-1) {
        if(i >= n - 1) {
            noLoop();
            // clearInterval(looper);
            console.log(arr);
        }
        j = 0;
        i++;
    }

    for(let i = 0; i < arr.length; i ++) {
        rect(10+(5 * i), height, 5, -height+arr[i]);
    }

    if(arr[j] > arr[j+1]) {
        [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
    }
    j++;
// }, 10);
}
