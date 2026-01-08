//Problem 6: Sum of All Numbers in an Array

function sumArray(arr) {
    let totalsum = 0;

    for (let i = 0; i < arr.length; i++) {
        totalsum = totalsum + arr[i];
    }
    return totalsum;
}
console.log(sumArray([1, 2, 3, 4])); //output: (1+2+3+4)= 10