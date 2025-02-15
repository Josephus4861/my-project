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
