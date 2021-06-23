# Sorting Algorithm Visualizer
[Link To Application](https://sorting-algorithm-visual-c1225.web.app/)

## Description
Sorting Algorithm Visualizer is a web application to visualize how different sorting algorithms work. Users can adjust the size of the array by dragging on the slider bar. Users can then select the sorting algorithm they want to see in action!

## Technologies
- JavaScript
- React
- JSX
- Firebase

## How It Works
A random unsorted array of size 'n' is generated on application load. The array consists of a series of div elements with randomly generated heights. Flexbox was used to organize the array due to its flexibility and ease of horizontally filling the screen.

Each sorting algorithm is contained within its own module. The implementation details are abstracted away from the rest of the program. When the user clicks on one of the sorting algorithm buttons, the unsorted array is passed from the main module (ie. SortingVisualizer.js) to the pertinent sorting algorithm module (eg. insertionSort.js). It is within these modules that the actual "sorting" takes place - that is, div element heights are highlighted and swapped. 

## Challenges and Unique Elements
This was an incredibly difficult project for one reason, and one reason alone: merge sort. In fact, merge sort may have been the single most technically challenging project that I've worked on thus far. It was exceedingly difficult to conceptualize how merge sort worked. Even with the help of the debugger, the recursive nature of merge sort and the sheer number of subarrays that were generated made it difficult to step through the code. And for the longest time, my biggest gripe with merge sort was that I could not figure out how to let the program know which div elements to highlight. The program needed to know the index position of what it was highlighting. In essence, my problem was as follows:

1. Merge sort would recursively generate subarrays from the original array (because thats how merge sort works).
2. The subarrays would be passed to a helper function that would highlight the relevant elements and sort them.
3. However, the helper function needed to know the original index of an element from the sub array - data that my program did not track.

After much reading, I finally came to the realization that my implementation of merge sort would not work for what I wanted to achieve. I needed to change it significantly. That was when I found a different version of merge sort, which also happens to be the most optimal version of merge sort. Rather than recursively creating subarrays, this version of merge sort would recursively generate "ceiling"" and "floor" indexes. Whereas my original merge sort generated subarrays, it did not track the upper/lower bounds of these arrays. The new method would not generate subarrays, but it would keep track of the index positions of the elements from the original array. To my great relief, this finally worked but not without its own additional difficulties. The new method required the use of a helper/auxiliary array. The auxiliary array simply acted as a temporary storage as the program moved indexes around.

After finally getting merge sort to correctly track which indexes needed to be highlighted and swapped, I had one more major hurdle. The program needed to know which div elements to highlight and when to swap heights. The timing of the highlight and swap would be critical. Unfortunately, I felt that I had already sunk enough time into this project. When my initial few attempts at timing, highlighting, and swapping elements did not fully work, I referred to help from [here](https://github.com/clementmihailescu/Sorting-Visualizer). It helped me reach the final stretch of my project.

## Conclusion and Future Plans
All in all, this project took 5 weeks to complete, 4 of those weeks were dedicated to merge sort alone. It took slightly more than a week to make menubar, bubble sort, insertion sort, and the main visualizer. This was an incredibly difficult project but I am very much satisfied with how it turned out. In the future, I plan on adding more sorting algorithms!
