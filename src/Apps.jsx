import React from 'react';
import Even from './Even';
import One from './One';
import Repeating from './Repeat';


// Even number (question no-1)
// One's (question no-2)
// Print the repeat number in between 1 to 101 ( question)

// In below all the question are in one div
// you can comment / uncomment them to see another questions answer.

const Apps = () => {
    return (
        <>
            <div>
                <Even />                        
                <One />                         
                <Repeating />                  
            </div>
        </>
    );
};

export default Apps;