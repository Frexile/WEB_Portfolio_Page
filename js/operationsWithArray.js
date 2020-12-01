function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandArr(size) {
    let array = new Array(size);
    
    for (let i = 0; i < array.length; ++i) {
        array[i] = getRandomInt(1000);
    } 

    return array;
}

function min(array) {
    let min = Number.MAX_VALUE;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

function max(array) {
    let max = Number.MIN_VALUE;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

var styles = {
    edge : 'background: skyblue',
    pivot : 'background: gold', 
    common : ''
}

function visualizeArray(arr, left, right, pivot) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[left] || arr[i] === arr[right]){
            console.log(`%c ${arr[i]} ← pointer`, styles.edge)
        } 
        else if (arr[i] === pivot){
            console.log(`%c ${arr[i]} ← pivot element`, styles.pivot)
        }
        else {
            console.log(`%c ${arr[i]} `, styles.common)
        }
    }

    console.log("------------------------")
}


function quickSort(arr) {
    return quickSortL(arr, 0, arr.length - 1);
}

function quickSortL(array, left, right) {
    if (left >= right) {
        return;
    }
    
    let pivot = array[parseInt(left + (right - left)/2)];
    console.log(pivot)
    visualizeArray(arr,left,right,pivot)
    let splitIndex = getSplitter(array, left, right, pivot);

    quickSortL(array, left, splitIndex - 1);
    quickSortL(array, splitIndex, right);
}

function getSplitter(arr, left, right, pivot) {
    while (left <= right){
        while (arr[left] < pivot){
            left++;
            visualizeArray(arr,left,right,pivot)
        }

        while (arr[right] > pivot){
            right--;
            visualizeArray(arr,left,right,pivot)
        }

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
            visualizeArray(arr,left,right,pivot)
        }
    }

    return left;
}

function swap(arr, first_index, second_index) {
    let tmp = arr[first_index];
    arr[first_index] = arr[second_index];
    arr[second_index] = tmp;
}

arr = getRandArr(10);
console.log("Current array: ", arr);
console.log("(Min:", min(arr), "; Max:", max(arr), ") using separate methods\n");

quickSort(arr)
console.log("Current array after quickSort: ", arr);
console.log("(Min:", arr[0], "; Max:", arr[arr.length-1], ") using quickSort results");


function tagCounter() {
    let tags = {}
    let tagsInDoc = document.getElementsByTagName('*');
    
    for(const tag of document.getElementsByTagName('*')) {
        if (tag.tagName in tags){
            tags[tag.tagName] += 1;
        } else 
            tags[tag.tagName] = 1; 
    }
    return tags;
}

console.log("Number of tags: ", tagCounter())
