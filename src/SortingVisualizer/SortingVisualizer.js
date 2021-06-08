import React, { useState, useEffect } from "react";
import Menubar from '../Menubar/Menubar';

export const defaultBarColor = "aquamarine";
export const comparingBarColor = "red";
export let sortingSpeed = 0.1;
const barHeightMultiplier = 10;

function SortingVisualizer() {
    const [arr, setArr] = useState([]);
    const [bars, setBars] = useState(100);

    useEffect(() => {
        newArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bars])
    
    function handleOnChangeForArrayLength(e) {
        setBars(e.target.value)
    }
    
    function newArray() {
        const tempArr = [];
        for(let i = 0; i < bars; i++) {
            tempArr.push(Math.floor(Math.random() * 100) + 5)
        }
        setArr(tempArr);
    }

    return (
        <div id="main-container">

            <Menubar data={arr} newArray={newArray} bars={bars} onChangeArrayLength={handleOnChangeForArrayLength} />

            <div id="bar-container">

                {arr.map((value, index) => (
                    <div
                        className='bar'
                        key={index}
                        style={{
                            backgroundColor: "aquamarine",
                            height: `${value * barHeightMultiplier}px`
                        }}
                    />
                ))}

            </div>
        </div>
    )
}

export default SortingVisualizer;