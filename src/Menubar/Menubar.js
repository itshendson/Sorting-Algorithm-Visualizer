import React, { useState } from "react";
import './Menubar.css'
import insertionSort from '../algorithms/insertionSort'
import mergeSort from '../algorithms/mergeSort'
import bubbleSort from '../algorithms/bubbleSort'

let isRunning = false;

function Menubar({data, newArray, bars, onChangeArrayLength}) {
    const [isProcessing, setProcessing] = useState(false);

    async function runAlgorithm(algo) {
        if (isRunning) return;
        setProcessing(isProcessing => !isProcessing);
        isRunning = setProcessing;
        await Promise.resolve(algo(data));
        setProcessing(isProcessing => !isProcessing);
        isRunning = setProcessing; 
    }

    return(
        <div id="menubar-container">
            <button id="new-array-button" className="algo-button" disabled={isProcessing} onClick={() => newArray()}>New Array</button>
            
            <div className="slider-box">
                <p className="slider-text">Array Size: {bars}</p>
                <input type="range" min={6} max={300} value={bars} disabled={isProcessing} className="slider" id="array-length-slider" bars={bars} onChange={onChangeArrayLength} />
            </div>

            {/* <div className="slider-box">
                <p className="slider-text">Sorting Speed: {sortSpeed}</p>
                <input type="range" min={1} max={1000} value={sortSpeed} className="slider" id="array-speed-slider" sortSpeed={sortSpeed} onChange={onChangeSortSpeed} />
            </div> */}
            
            
            <button className="algo-button" onClick={() => runAlgorithm(bubbleSort)}>Bubble Sort</button>
            <button className="algo-button" onClick={() => runAlgorithm(mergeSort)}>Merge Sort</button>
            <button className="algo-button" onClick={() => runAlgorithm(insertionSort)}>Insertion Sort</button>
        </div>
    )
}

export default Menubar;