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

    console.log(list);


    //complexité algorithmique de O(n²)

    const findSum = (list, k) => {
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list.length; j++) {
                if (i !== j && list[i] + list[j] === k) {
                    return true;
                };
            };
        };
        return false;
    };
    console.log(`Exercice 1, résultat en 0(n2): ${findSum(list, 17)}`)
    console.log('--------------------')


    // complexité algorithmique de O(n) 
    const twoSumOn = (list, k) => {
        let start = 0;
        let end = list.length - 1;
        while (start < end) {
            let sum = list[start] + list[end];
            if (sum > k) {
                end -= 1;
            } else if (sum < k) {
                start += 1;
            } else {
                return true;
            };
        };
        return false;
    }
    console.log(list);
    console.log(`Exercice 3, résultat en O(n) : ${twoSumOn(list, 17)}`)
    console.log('--------------------')


    //un seul passage O(n)
    const findSumOnePass = (list, k) => {
        let searchValues = new Set();
        searchValues.add(k - list[0]);
        for (let i = 1, length = list.length; i < length; i++) {
            let searchVal = k - list[i];
            if (searchValues.has(list[i])) {
                return true;
            } else {
                searchValues.add(searchVal);
            }
        };
        return false;
    };
    console.log(list);
    console.log(`Exercice 5, résultat en 1 passage O(n): ${findSumOnePass(list, 17)}`)
    console.log('--------------------')

});