// You should implement your task here.
module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                matrix[i].sort((a, b) => b - a);
            }
            for (let j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j]);
            }
        }
    }
    return arr;
};
