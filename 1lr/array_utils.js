
const sumElementsArray = (arr) => arr.reduce((acc, num) => acc + num, 0);

const possitiveElementsArray = (arr) => arr.filter(elem => elem >= 0);

const negativeElementsArray = (arr) => arr.filter(elem => elem <= 0);


module.exports = {sumElementsArray,possitiveElementsArray,negativeElementsArray};


