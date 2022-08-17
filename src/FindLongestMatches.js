import React, { useState } from "react";


const LongestMatch = () => {
    const [data, setData] = useState(0);

    const handleCheck = (e) => {

        const inputValue = e.target.value;
        const binOrNot = /^[01]+$/g;

        if (inputValue && !binOrNot.test(inputValue)) {
            setData('Incorrect Bin Number');
            return;
        }
        const matchZ = /(?<=1)(0+)(?=1)/g;
        let longest = inputValue.match(matchZ);

        longest = longest ? longest.sort((a, b) => {
                return b.length - a.length;
        })[0] : [];
        setData(longest.length);
    }

    return (
        <div>
            <input onChange={handleCheck} id='inputBinary' type='number' placeholder="Binary number" />
            <p>L - {data}</p>
        </div>
    )
}

export default LongestMatch;