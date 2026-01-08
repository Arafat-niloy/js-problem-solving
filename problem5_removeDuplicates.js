//Problem 5: Remove Duplicates from an Array

function removeDuplicates(arr) {
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));  //output: [1,2.3.4]