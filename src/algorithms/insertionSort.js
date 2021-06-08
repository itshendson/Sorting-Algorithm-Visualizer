import { sortingSpeed, defaultBarColor, comparingBarColor } from '../SortingVisualizer/SortingVisualizer'

async function insertionSort(unsortedArray) {
    let length = unsortedArray.length;
    for (let i = 1; i < length; i++) {
        const arrayBars = document.getElementsByClassName('bar');
        let barI;
        let barJ;
        let barJPlusOne;

        barI = arrayBars[i].style;
        barI.backgroundColor = comparingBarColor;

        let key = unsortedArray[i];
        let j = i - 1;

        while (j >= 0 && unsortedArray[j] > key) {
            barJ = arrayBars[j].style;
            barJPlusOne = arrayBars[j + 1].style;

            barJ.backgroundColor = comparingBarColor;
            barJPlusOne.backgroundColor = comparingBarColor;

            const tmpHeight = barJPlusOne.height;
            barJPlusOne.height = barJ.height;
            barJ.height = tmpHeight;

            unsortedArray[j + 1] = unsortedArray[j];
            j--;

            await new Promise(r => setTimeout(r, sortingSpeed));
            barJ.backgroundColor = defaultBarColor;
            barJPlusOne.backgroundColor = defaultBarColor;
        }
        unsortedArray[j + 1] = key;
        await new Promise(r => setTimeout(r, sortingSpeed));
        barI.backgroundColor = defaultBarColor;
    }
}

export default insertionSort;