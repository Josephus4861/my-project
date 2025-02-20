function main() {
    let arr1 = [1, 2, 3, 0, 0, 0];
    let arr2 = [2, 5, 6];
    return mergeAndSort(arr1, arr2);
}

// function mergeAndSort(arr1, arr2) {

//     let filteredArr1 = arr1.filter(num => num !== 0);
//     let filteredArr2 = arr2.filter(num => num !== 0);
//     let mergedArray = [...filteredArr1, ...filteredArr2];
//     return mergedArray.sort((a, b) => a - b);
// }

// The spreading of the arrays arr1 and arr2 is done first, and then the merged array is filtered for zeros.
// This reduces the number of operations when dealing with larger arrays by filtering the combined array instead of filtering both separately before merging.

// function mergeAndSort(arr1, arr2) {
//     let mergedArray = [...arr1, ...arr2];
//     let filteredArray = mergedArray.filter(num => num !== 0);
//     return filteredArray.sort((a, b) => a - b);
// }

// console.log(main());

function mergeAndSort(arr1, arr2) {
    let merged = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== 0) merged.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        merged.push(arr2[i]);
    }

    merged.sort((a, b) => a - b);

    return merged;
}

console.log(main());