function intersect(nums1, nums2){
    let sortedNums1 = nums1.sort((a , b) => a - b);
        let sortedNums2 = nums2.sort((a , b) => a - b);
        let result = [];
        let i = 0;
        let j = 0;
        
        while(i < sortedNums1.length && j < sortedNums2.length){
            if(sortedNums1[i] === sortedNums2[j]){
                if(!result.includes(sortedNums1[i])) result.push(sortedNums1[i]);
                i++;
                j++;
            }
            else if(sortedNums1[i] < sortedNums2[j]) i++;
            else j++;
        }
        return result;
    }


    let nums1 = [1,2,2,1]
    let nums2 = [2,2]

    console.log(intersect(nums1,nums2))