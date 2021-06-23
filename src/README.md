# Sorting Algorithm Visualizer
[Link To Application](https://sorting-algorithm-visual-c1225.web.app/)

## Description
Sorting Algorithm Visualizer is a web application that visualizes how different sorting algorithms work on an array.

## Technologies
- JavaScript
- React
- JSX
- Firebase

## How It Works
When the application is loaded, a random unsorted array of size 'n' is generated on screen. The array is actually a series of div elements, with a background color, and randomly generated heights. Flexbox is used to organize the array because of the ease by which it can horizontally fill the screen. 

Each sorting algorithm is contained within its own module. The implementation details are abstracted away from the rest of the program. When the user clicks on one of the sorting algorthm buttons, the unsorted array is passed from the main module (ie. SortingVisualizer.js) to the pertinant sorting algorithm module (eg. insertionSort.js). It is within these module that the actual "sorting" takes place - that is, div element heights are highlighted and swapped. 

## Challenges and Unique Elements
The most difficult aspect of this project was merge sort. In fact, merge sort may have been the single most technically challenging project that I've worked on thus far. It was exceedingly difficult to conceptualize how merge sort worked. Even with the help of the debugger, the recursive nature of merge sort made it difficult to step through the code. And for the longest time, my biggest problem with merge sort was that I could not figure out how to let the program know which div elements to highlight. The program needed to know the index position of what it was highlighting. In essence, my problem was as follows:

1. Merge sort would recursively generate subarrays from the original array.
2. The subarrays would be passed to a helper function that would highlight the relevant elements and sort them.
3. However, the helper function needs to know the original index of an element in the main array - data that I needed to track in my program.

After much reading on merge sort I finally came to the realization that my implementation of merge sort would not work for what I wanted to achieve. I needed to implement a different version of merge sort, which also happens to be the most optimal version of merge sort. Rather than recursively creating subarrays, I would have to recursively generate "ceiling"" and "floor" indexes. Whereas my original merge sort generated subarrays, it did not track the upper/lower bounds of these arrays. The new method would not generate subarrays, but it would keep track of the index positions of the elements from the original array. To my great relief, this finally worked but not without its own additional challenges. The new method required the use of a helper/auxillary array. The auxillary array simply acted as a temporary storage as the program moved indexes around.

After finally getting merge sort to correctly track which index needed to be swapped, I had one more major problem. The program needed to know which div elements to highlight and when to swap heights. The timing of the highlight and swap would also be critical. Unfortunately, this was my longest and most difficult project. Ultimately, in order to get the last part of my program to work, I referred to help from [here](https://github.com/clementmihailescu/Sorting-Visualizer-Tutorial/tree/master/src).

## Conclusion and Future Plans
All in all, this project took 5 weeks to complete, 4 of those weeks were dedicated to merge sort alone. This was an incredibly difficult project but I am very much satisfied with how it turned out. In the future, I plan on adding more sorting algorithms to this project! 