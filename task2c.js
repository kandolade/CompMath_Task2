function maxotovJacobi(a, b, x, eps) {
    let n = x.length, x_new = new Array(n);
    while (true) {
        let error = 0.0;
        for (let i = 0; i < n; i++) {
            x_new[i] = b[i];
            for (let j = 0; j < n; j++) {
                if (i !== j) x_new[i] -= a[i][j] * x[j];
            }
            x_new[i] /= a[i][i];
            error += Math.abs(x_new[i] - x[i]);
        }
        x = x_new.slice();
        if (error < eps) break;
    }
    return x;
}

let a = [[5, -1, 1], [2, 4, 0], [1, 1, 5]];
let b = [10, 12, -1];
let x = [2, 3, 0];
let eps = 0.1;
console.log(maxotovJacobi(a, b, x, eps));
