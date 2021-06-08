import { sortingSpeed, defaultBarColor, comparingBarColor } from '../SortingVisualizer/SortingVisualizer'

// Decides whether bar should change colour or change bar height
async function mergeSort(unsortedArray) {
  const sortedBars = mergeSortInitialize(unsortedArray);
  for (let i = 0; i < sortedBars.length; i++) {
    const arrayBars = document.getElementsByClassName('bar');
    if (i % 3 !== 2) {                                                              // Decides whether to swap bar height or not.
      const [firstIndex, secondIndex] = sortedBars[i];
      const barA = arrayBars[firstIndex].style;
      const barB = arrayBars[secondIndex].style;
      const color = i % 3 === 0 ? comparingBarColor : defaultBarColor;             // Decides whether to turn bars red (comparing) vs aquamarine (not comparing). True for index 0, 3, 6, etc.
      await new Promise(r => setTimeout(r, sortingSpeed));
      barA.backgroundColor = color;
      barB.backgroundColor = color;
    } else {
      await new Promise(r => setTimeout(r, sortingSpeed));
      const [firstIndex, barHeight] = sortedBars[i];
      const barA = arrayBars[firstIndex].style;
      barA.height = `${barHeight * 10}px`;
    }
  }
}

// Initialzies variables before starting mergeSortRecursion()
function mergeSortInitialize(unsortedArray) {
  const sortedBars = [];
  const aux = [...unsortedArray];
  mergeSortRecursion(unsortedArray, aux, 0, unsortedArray.length - 1, sortedBars);
  return sortedBars;
}

// This function breaks the unsorted array into multiple left and right runs.
function mergeSortRecursion(unsortedArray, aux, lowIndex, highIndex, sortedBars) {
  // Base case
  if (highIndex === lowIndex) return;

  // Get midIndex
  const midIndex = Math.floor((highIndex + lowIndex) / 2);

  // Recursively run left side and right side until base case reached.
  mergeSortRecursion(unsortedArray, aux, lowIndex, midIndex, sortedBars);
  mergeSortRecursion(unsortedArray, aux, midIndex + 1, highIndex, sortedBars);

  // Merge the left sides and right sides
  merge(unsortedArray, aux, lowIndex, midIndex, highIndex, sortedBars);
}

// Does the actual work of ordering list
function merge(unsortedArray, aux, lowIndex, midIndex, highIndex, sortedBars) {
  let key = lowIndex;
  let i = lowIndex;
  let j = midIndex + 1;

  // While there are elements in left/right sides, put element in auxillary array
  // then increment the indexes by 1.
  while (i <= midIndex && j <= highIndex) {
    sortedBars.push([i, j])
    sortedBars.push([i, j])

    if (unsortedArray[i] <= unsortedArray[j]) {
      sortedBars.push([key, unsortedArray[i]]);
      aux[key] = unsortedArray[i];
      key++;
      i++;
    } else {
      sortedBars.push([key, unsortedArray[j]]);
      aux[key] = unsortedArray[j];
      key++;
      j++;
    }
  }

  // Move any remaining elements from unsortedArray into aux. Right side already sorted.
  while (i <= midIndex) {
    sortedBars.push([i,i]);
    sortedBars.push([i,i]);
    sortedBars.push([key, unsortedArray[i]]);
    aux[key] = unsortedArray[i];
    key++;
    i++;
  }

  // Make the unsortedArray equal to the auxillary array so that the next loop is working with the correct list
  for (let k = 0; k <= highIndex; k++) {
    unsortedArray[k] = aux[k];
  }
}


export default mergeSort;