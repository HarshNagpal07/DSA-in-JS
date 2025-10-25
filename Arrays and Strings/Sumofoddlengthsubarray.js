let arr=[5,2,-4,-5, 3,-1,2,3,1];
let oddsum = 0;

    for (let i = 0; i < arr.length; i++) {
        let prevsum = 0;
        for (let j = i; j < arr.length; j++) {
            prevsum = prevsum + arr[j];

            let length = j-i + 1;

            if (length % 2 === 1) {
                oddsum = oddsum + prevsum;
            }
        }
    }
        console.log(oddsum);
       /* | Your code version                          | Operation                             | Output |
| ------------------------------------------ | ------------------------------------- | ------ |
| `oddsum += prevsum`                        | Sums **all** odd-length subarrays     | `15`   |
| `maxOddSum = Math.max(maxOddSum, prevsum)` | Finds **largest** odd-length subarray | `8`    |*/
