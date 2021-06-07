import React, { useEffect, useState } from 'react';


const One = () => {
    const [count, setCount] = useState(0)
    var findMaxConsecutiveOnes = function (nums) {
        let largestCount = 0;
        let currentCount = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                currentCount = 0;
            } else {
                currentCount++;
            };
            if (currentCount > largestCount) largestCount = currentCount;
        };
        return largestCount;
    };

    let max = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
    let num = findMaxConsecutiveOnes(max);

    useEffect(() => {
        setCount(num)
    }, [])

    return (
        <div>
            {
                count
            }
        </div>
    )
}


export default One;