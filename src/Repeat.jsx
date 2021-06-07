import React, { useEffect, useState } from 'react';


const Repeating = () => {
    const [repeating, setRepeating] = useState('')

    let arr = []
    let num;

    for (let i = 0; i < 101; i++) {
        arr.push(i)
    }
    arr.push(5);           //Push the number you want to add multiple times in them                       

    for (let j = 0; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[j] === arr[k]) {
                num = arr[j];
            }
        }
    }
    useEffect(() => {
        setRepeating(num);
        console.log(repeating, num)
    }, [])

    return (
        <div>
            {
                repeating
            }
        </div>
    )
}

export default Repeating;