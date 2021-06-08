import { sortingSpeed, defaultBarColor, comparingBarColor } from '../SortingVisualizer/SortingVisualizer'

async function bubbleSort(unsortedArray) {
    
    let len = unsortedArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            
            // Highlight the two bars we are comparing in red
            const arrayBars = document.getElementsByClassName('bar');
            const barA = arrayBars[j].style; 
            const barB = arrayBars[j + 1].style;
            barA.backgroundColor = comparingBarColor;
            barB.backgroundColor = comparingBarColor;
            await new Promise(r => setTimeout(r, sortingSpeed));

            // This swaps the bars to be in order 
            if (unsortedArray[j] > unsortedArray[j + 1]) {
                // Modifies the heights of each div so it looks right visually
                let tmpHeight = barA.height;
                barA.height = barB.height;
                barB.height = tmpHeight;

                // Modifies the value of each element in array so it works right in the loop
                let tmpValue = unsortedArray[j];
                unsortedArray[j] = unsortedArray[j + 1];
                unsortedArray[j + 1] = tmpValue;

                // Turns bars back to default colour after swapping
                barA.backgroundColor = defaultBarColor;
                barB.backgroundColor = defaultBarColor;
            } else {

                // If any two bars do not need to be swapped, change back to default color
                barA.backgroundColor = defaultBarColor;
                barB.backgroundColor = defaultBarColor;
            }
        }
    }
}


export default bubbleSort;