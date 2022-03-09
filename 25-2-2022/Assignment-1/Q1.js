


function countOccurrences(arr,n,target)
{
    let frequency = 0;
    for (let i=0; i<n; i++)
    {
        if (target == arr[i])
            frequency++;
    }
    return frequency;
}
 
arr=[1,1,2,2,4,5,5,6,6,6,6,9,10,11]
let  n = arr.length;
let target = 6;
console.log(countOccurrences(arr, n, target));