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


    // complexité algorithmique de O(n)
    const getBuildingsOn = (list) => {
        let greatestNumber = 0;
        let result = new Array();

        for (let loop = 0; loop < list.length; loop++) {
            if (list[loop] >= greatestNumber) {
                result.push(loop);
                greatestNumber = list[loop];
            }
        }
        return result.length
    }
    console.log('Exercice 4 en O(n) :')
    console.log(`${getBuildingsOn(list)} batiment(s) vue sur le coucher du soleil.`)
    console.log('--------------------')


    console.log(list);

    // complexité algorithmique un seul passage de O(n)
    const getBuildingsOnePass = (list) => {
        let currentMaxHeight = list[0];
        let result = [];
        list.filter((height) => {
            if (height <= currentMaxHeight) {
                currentMaxHeight = height;
                return result.push(height);
            }
            return false;
        });
        return result.length;
    }
    console.log('Exercice 6 O(n) en un seul passage :')
    console.log(`${getBuildingsOnePass(list)} batiment(s) vue sur le coucher du soleil.`)
    console.log('--------------------')

});