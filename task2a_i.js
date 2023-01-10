let matrix = [[2, 5, 7, 52], [2, 1, -1, 0], [1, 1, 1, 9]];

for (let i = 0; i < matrix.length; i++) {
    let pivot = matrix[i][i];
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = matrix[i][j] / pivot;
    }
    for (let k = 0; k < matrix.length; k++) {
        if (k !== i) {
            let factor = matrix[k][i];
            for (let j = 0; j < matrix[k].length; j++) {
                matrix[k][j] -= factor * matrix[i][j];
            }
        }
    }
}

console.log(matrix);