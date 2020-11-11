const fs = require('fs');
const fileName = process.argv[2];

// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return;
    }
    const array = Array.from(data.split(/\s+/))
    const list = array.map(v => parseInt(v, 10));

    console.log(`**** Triez ce tableau : ${list} *****`);
    console.log('--------------------')

    let comparisonCount = 0
    const bubbleSort = (list) => {
        for (let j = 0; j < list.length; j++) {
            for (let i = 0; i < list.length; i++) {
                comparisonCount++
                if (list[i] > list[i + 1]) {
                    let temp = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                }
            }
        }
        return list;
    };
    const resultBubbleSort = bubbleSort(list);
    console.log(`Tri à bulles (${comparisonCount} comparaisons) :`, resultBubbleSort);
    console.log('--------------------')


    const insertionSort = (list) => {
        const len = list.length;
        for (let i = 0; i < len; i++) {
            comparisonCount++
            let el = list[i];
            let j;
            for (j = i - 1; j >= 0 && list[j] > el; j--) {
                list[j + 1] = list[j];
            }
            list[j + 1] = el;
        }
        return list;
    };
    const resultInsertionSort = insertionSort(list);
    console.log(`Tri par insertion (${comparisonCount} comparaisons) :`, resultInsertionSort);
    console.log('--------------------')


    let selectionSort = (list) => {
        //Loop till the second last element
        for (let i = 0; i < list.length - 1; i++) {
            //Loop after the i till the last element
            for (let j = i + 1; j < list.length; j++) {
                comparisonCount++
                //if jth element is less than the ith element then swap
                //change < to > for sorting in descending order
                if (list[j] < list[i]) {
                    let temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
            }
        }
        return list;
    }
    const resultSelectionSort = selectionSort(list);
    console.log(`Tri par selection (${comparisonCount} comparaisons) :`, resultSelectionSort);
    console.log('--------------------')


    const quickSort = (list) => {
        if (list.length <= 1) {
            return list
        } else {
            const left = []
            const right = []
            const sorted = []
            const pivot = list.pop() // we're picking the last item to act as the pivot
            const length = list.length

            for (let i = 0; i < length; i++) {
                comparisonCount++
                if (list[i] <= pivot) {
                    left.push(list[i])
                } else {
                    right.push(list[i])
                }
            }
            return sorted.concat(quickSort(left), pivot, quickSort(right))
        }
    }
    const resultQuickSort = quickSort(list);
    console.log(`Tri rapide (${comparisonCount} comparaisons) :`, resultQuickSort);
    console.log('--------------------')


    const mergeSort = (list) => {
        if (list.length === 1) {
            // return once we hit an listay with a single item
            return list
        }

        const middle = Math.floor(list.length / 2) // get the middle item of the listay rounded down
        const left = list.slice(0, middle) // items on the left side
        const right = list.slice(middle) // items on the right side

        return merge(
            mergeSort(left),
            mergeSort(right)
        )
    }

    // compare the arrays item by item and return the concatenated result
    const merge = (left, right) => {
        let result = []
        let indexLeft = 0
        let indexRight = 0

        while (indexLeft < left.length && indexRight < right.length) {
            comparisonCount++
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        }

        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    }
    const resultMergeSort = mergeSort(list);
    console.log(`Tri fusion (${comparisonCount} comparaisons) :`, resultMergeSort);
    console.log('--------------------')

    const shellSort = (list) => {
        let length = list.length;
        let h = 1;
        while (h < length / 3) {
            comparisonCount++
            h = 3 * h + 1;
        }
        while (h > 0) {
            for (var i = h; i < length; i++) {

                for (var j = i; j > 0 && list[j] < list[j - h]; j -= h) {
                    list.swap(j, j - h);
                }
            }
            //decreasing h
            h = --h / 3
        }
        return list;
    };
    const resultShellSort = shellSort(list);
    console.log(`Tri de shell (${comparisonCount} comparaisons) :`, resultShellSort);
    console.log('--------------------')


    const combSort = (list) => {
        var interval = Math.floor(list.length / 1.3);
        while (interval > 0) {
            comparisonCount++
            for (var i = 0; i + interval < list.length; i += 1) {
                if (list[i] > list[i + interval]) {
                    var small = list[i + interval];
                    list[i + interval] = list[i];
                    list[i] = small;
                }
            }
            interval = Math.floor(interval / 1.3);
        }
        return list;
    };
    const resultCombSort = combSort(list);
    console.log(`Tri à peigne (${comparisonCount} comparaisons) :`, resultCombSort);
});
