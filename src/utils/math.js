export const createMatrix = (n) => {
    const M = Array.from({ length: n }, () => (
        Array.from({ length: n }, () => 1)
    ));

    return M;
}

const add = (M1, M2, n) => {
    const M3 = createMatrix(n);

    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            M3[i][j] = M1[i][j] + M2[i][j];

    return M3;
}

const sub = (M1, M2, n) => {
    const M3 = createMatrix(n);

    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            M3[i][j] = M1[i][j] - M2[i][j];

    return M3;
}


export const strassenMult = (A, B, n) => {
    const C = createMatrix(n);
    const k = n / 2;

    if (n == 1) {
        const C = createMatrix(1);
        C[0][0] = A[0][0] * B[0][0];
        return C;
    }
    else {
        const A11 = createMatrix(k);
        const A12 = createMatrix(k);
        const A21 = createMatrix(k);
        const A22 = createMatrix(k);
        const B11 = createMatrix(k);
        const B12 = createMatrix(k);
        const B21 = createMatrix(k);
        const B22 = createMatrix(k);

        for (let i = 0; i < k; i++) {
            for (let j = 0; j < k; j++) {
                A11[i][j] = A[i][j];
                A12[i][j] = A[i][k + j];
                A21[i][j] = A[k + i][j];
                A22[i][j] = A[k + i][k + j];
                B11[i][j] = B[i][j];
                B12[i][j] = B[i][k + j];
                B21[i][j] = B[k + i][j];
                B22[i][j] = B[k + i][k + j];
            }
        }

        const P1 = strassenMult(A11, sub(B12, B22, k), k);
        const P2 = strassenMult(add(A11, A12, k), B22, k);
        const P3 = strassenMult(add(A21, A22, k), B11, k);
        const P4 = strassenMult(A22, sub(B21, B11, k), k);
        const P5 = strassenMult(add(A11, A22, k), add(B11, B22, k), k);
        const P6 = strassenMult(sub(A12, A22, k), add(B21, B22, k), k);
        const P7 = strassenMult(sub(A11, A21, k), add(B11, B12, k), k);

        const C11 = sub(add(add(P5, P4, k), P6, k), P2, k);
        const C12 = add(P1, P2, k);
        const C21 = add(P3, P4, k);
        const C22 = sub(sub(add(P5, P1, k), P3, k), P7, k);

        for (let i = 0; i < k; i++) {
            for (let j = 0; j < k; j++) {
                C[i][j] = C11[i][j];
                C[i][j + k] = C12[i][j];
                C[k + i][j] = C21[i][j];
                C[k + i][k + j] = C22[i][j];
            }
        }

        return C;
    }
}

// const A = [
//     [2, 5, 4, 1],
//     [9, 6, 10, 4],
//     [7, 3, 4, 1],
//     [1, 5, 3, 2]
// ];

// const B = [
//     [7, 3, 4, 1],
//     [1, 5, 3, 2],
//     [2, 5, 4, 1],
//     [9, 6, 10, 4]
// ];

// const C = strassenMult(A, B, 4);
// console.log(C);