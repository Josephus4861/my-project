Merge and Sort Arrays in JavaScript


Overview:

This project is a JavaScript implementation of an algorithm that merges two arrays while filtering out 0 values and sorting the result in ascending order.
It demonstrates array manipulation techniques, including filtering, merging, and sorting, using modern JavaScript syntax.

This was later amended to omit 'spread' and 'concat' for performance reasons.


Implementation:

The core logic consists of two functions:

function main() {
    let arr1 = [1, 2, 3, 0, 0, 0];
    let arr2 = [2, 5, 6];
    return mergeAndSort(arr1, arr2);
}

function mergeAndSort(arr1, arr2) {
    let filteredArr1 = arr1.filter(num => num !== 0);
    let filteredArr2 = arr2.filter(num => num !== 0);
    let mergedArray = [...filteredArr1, ...filteredArr2];
    return mergedArray.sort((a, b) => a - b);
}

console.log(main());

I later made the following optimisation amendment:

function main() {
    let arr1 = [1, 2, 3, 0, 0, 0];
    let arr2 = [2, 5, 6];
    return mergeAndSort(arr1, arr2);
}

function mergeAndSort(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2];
    let filteredArray = mergedArray.filter(num => num !== 0);
    return filteredArray.sort((a, b) => a - b);
}

console.log(main());

The spreading of the arrays arr1 and arr2 is done first, and then the merged array is filtered for zeros.
This reduces the number of operations when dealing with larger arrays by filtering the combined array instead of filtering both separately before merging.

Later amended to omit spread and concat: 

function mergeAndSort(arr1, arr2) {
    let merged = [];

    // Copy non-zero elements from arr1
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== 0) merged.push(arr1[i]);
    }

    // Copy all elements from arr2
    for (let i = 0; i < arr2.length; i++) {
        merged.push(arr2[i]);
    }

    // Sort the merged array
    merged.sort((a, b) => a - b);

    return merged;
}

Key Features:

Filtering: Removes all 0 values from the arrays.
Merging: Combines two arrays into one.
Sorting: Orders the merged array in ascending order.
// ES6+ Syntax: Utilizes modern JavaScript features like the spread operator and filter.


Running in Browser Console:

Copy and paste the code snippet above into your browser’s developer console and execute it.


Why This Approach?:

Uses filter for efficient removal of unwanted values.
Spreads the filtered arrays for concise merging.
Sorts in-place using .sort((a, b) => a - b) for readability and performance.
Spread and concat later removed for performance reasons.


Notes:

The function assumes the input arrays contain only numbers.
If 0 values should be preserved in a different way, minor modifications would be needed.


Author:

Joseph Parry – Josephus4861
