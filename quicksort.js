const lines = 200;

let arr = [];
let n = arr.length;
let i = 0;
let j = 0;
let p = 0;

async function quicksort(arr, lo, hi) {
    if(lo < hi) {
        p  = await partition(arr, lo, hi);
        await Promise.all([
            quicksort(arr, lo, p - 1),
            quicksort(arr, p + 1, hi)
        ]);
    } 
}


async function partition(arr, lo, hi) {
    let pivot = arr[hi];
    let i = lo;
    for(let j = lo; j <= hi; j++) {
        if(arr[j] < pivot) {
            await swap(arr, i, j);
            i++;
        }
    }
    await swap(arr, i, hi);
    return i;
}


async function setup() {
    createCanvas(800, 400);
    background(0);
    for(let x = 0; x < lines; x++) {
        arr.push( random(100) + 10 );
    }
    n  = arr.length;
    stroke(255);
    await quicksort(arr, 0, arr.length - 1);
    // console.log(arr);
}


function draw() {
    background(128);
    for(let i = 0 ; i < arr.length; i++)  {
        if(i == p) {
            stroke(255, 0, 0);
        } else {
            stroke(255);
        }
        line((2*i)+10, height, (2*i)+10, arr[i]);
        // rect((2*i)+10, height/2, (2*i)+10, -arr[i]);
    }

}

async function swap(arr, i, j) {
    await sleep(10);
    [ arr[i], arr[j] ] = [ arr[j], arr[i] ];

}

async function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}