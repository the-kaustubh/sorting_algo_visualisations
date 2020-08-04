const lines = 5;
var times = 0;

let arr = Array(lines).fill(0);
// arr1 = [1, 3, 5];
// arr2 = [2, 4, 6];
// console.log(merge(arr1, arr2));

function setup() {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(random(100));

    }
    console.log(arr);
    console.log(mergeSort(arr, 0, arr.length - 1));
    // console.log(times);



}

function draw() {

}

function mergeSort(arr, start, end) {
    times++;
    if (!(start >= end)) {
        return arr;
    }
    let mid = floor((start + end) / 2);
    console.log(mid);
    let arr1 = mergeSort(arr.slice(0, mid));
    // console.log(arr1);
    let arr2 = mergeSort(arr.slice(mid));
    // console.log(arr2);
    return merge(arr1, arr2);
}



function merge(arr1, arr2) {
    l_arr1 = arr1.length;
    l_arr2 = arr2.length;
    let l_arr3 = l_arr1 + l_arr2;
    let arr3 = Array(l_arr3).fill(0);
    let j = 0;
    let i = 0;
    for (let k = 0; k < l_arr3; k++) {
        if (arr1[i] <= arr2[j]) {
            arr3[k] = arr1[i];
            i++;
        } else {
            arr3[k] = arr2[j];
            j++;
        }
    }
    return arr3;
}