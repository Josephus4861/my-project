Merge and Sort Arrays in JavaScript

Overview:

This project is a JavaScript implementation of an algorithm that merges two arrays while filtering out 0 values and sorting the result in ascending order.
It demonstrates array manipulation techniques, including filtering, merging, and sorting, using modern JavaScript syntax.

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

Key Features:

Filtering: Removes all 0 values from the arrays.
Merging: Combines two arrays into one.
Sorting: Orders the merged array in ascending order.
ES6+ Syntax: Utilizes modern JavaScript features like the spread operator and filter.

Running in Browser Console:

Simply copy and paste the code snippet above into your browser’s developer console and execute it.

Why This Approach?:

Uses filter for efficient removal of unwanted values.
Spreads the filtered arrays for concise merging.
Sorts in-place using .sort((a, b) => a - b) for readability and performance.

Notes:

The function assumes the input arrays contain only numbers.
If 0 values should be preserved in a different way, minor modifications would be needed.

Author:

Joseph Parry – Josephus4861
