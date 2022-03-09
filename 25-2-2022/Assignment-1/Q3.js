function findFirstMissing(array, start, end)
{
    if (start > end)
        return end + 1;

    if (start != array[start])
        return start;

    let mid = parseInt((start + end) / 2, 10);

    // Left half has all elements from 0 to mid
    if (array[mid] == mid)
        return findFirstMissing(array, mid+1, end);

    return findFirstMissing(array, start, mid);
}
 
let arr = [0, 1, 2, 6, 9, 11, 15] ;
let n = arr.length;

console.log("smallest Missing element is " + findFirstMissing(arr, 0, n - 1)); //3

arr=[1, 2, 3, 4, 6, 9, 11, 15] ;

console.log("smallest Missing element is " + findFirstMissing(arr, 0, n - 1)); //0

arr = [0, 1, 2, 3, 4, 5, 6];

console.log("smallest Missing element is " + findFirstMissing(arr, 0, n - 1));//7