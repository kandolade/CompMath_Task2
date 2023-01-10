function maxotovGaussElim(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let pivot = matrix[i][i];
        for (let j = i + 1; j < matrix.length; j++) {
            let scalar = matrix[j][i] / pivot;
            for (let k = i; k < matrix[j].length; k++) {
                matrix[j][k] -= matrix[i][k] * scalar;
            }
        }
    }
    let solution = new Array(matrix.length).fill(0);
    for (let i = matrix.length - 1; i >= 0; i--) {
        solution[i] = matrix[i][matrix.length] / matrix[i][i];
        for (let j = i - 1; j >= 0; j--) {
            matrix[j][matrix.length] -= matrix[j][i] * solution[i];
        }
    }
    return solution;
}
let matrix = [[1, 1, 1, 9], [2, -3, 4, 13], [3, 4, 5, 40]];
let x = maxotovGaussElim(matrix);
console.log("x = " + x[0]);
console.log("y = " + x[1]);
console.log("z = " + x[2]);
