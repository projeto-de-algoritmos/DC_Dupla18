import React, { useState } from "react";
import { Matrix } from "../components/Matrix";
import { Button } from "../components/Button";
import { createMatrix, strassenMult } from "../utils/math";


export function MainPage() {
    const [matrix1, setMatrix1] = useState([]);
    const [matrix2, setMatrix2] = useState([]);
    const [matrix3, setMatrix3] = useState([]);


    const handleCreateMatrix = (size) => {
        const newM1 = createMatrix(size);
        setMatrix1(newM1);

        const newM2 = createMatrix(size);
        setMatrix2(newM2);

        setMatrix3([]);
    }

    const handleUpdateMatrixValue = (matrixId, rowIndex, colIndex, value) => {
        let newMatrix = matrixId == 1 ? matrix1 : matrix2;
        newMatrix[rowIndex][colIndex] = parseInt(value);

        if (matrixId == 1) setMatrix1(newMatrix);
        else setMatrix2(newMatrix);

        setMatrix3([]);
    }

    const handleMultiplyMatrixes = () => {
        console.log(matrix1, matrix2)
        const result = strassenMult(matrix1, matrix2, matrix1.length);

        setMatrix3(result);
        console.log(result, matrix3)
    }

    const colNum = {
        2: 'grid-cols-2',
        4: 'grid-cols-4',
        16: 'grid-cols-16',
        32: 'grid-cols-32',
        64: 'grid-cols-64'
    }


    return (
        <div className="h-full w-full flex flex-col items-center justify-start gap-6 text-xl text-zinc-900">
            <div className="bg-zinc-900 w-full h-24 flex items-center justify-center text-4xl font-bold px-4">
                <h1 className="text-white text-2xl">
                    Multiplicação de Matrizes Quadradas
                </h1>
            </div>

            <div className="flex gap-2 justify-start items-center">
                <p cLlassName="text-left">
                    Selecione o tamanho das matrizes:
                </p>
            </div>

            <div className="flex gap-6">
                <Button value={2} buttonFunction={() => handleCreateMatrix(2)} />

                <Button value={4} buttonFunction={() => handleCreateMatrix(4)} />

                <Button value={16} buttonFunction={() => handleCreateMatrix(16)} />
            </div>

            {
                matrix1.length && matrix2.length ? (
                    <div className="flex flex-col md:flex-row items-center gap-10 text-2xl font-medium">
                        <Matrix matrix={matrix1} id={1} updateMatrix={handleUpdateMatrixValue} />

                        <p>X</p>

                        <Matrix matrix={matrix2} id={2} updateMatrix={handleUpdateMatrixValue} />
                    </div>
                ) : null
            }

            <button
                onClick={handleMultiplyMatrixes}
                className="border-2 border-zinc-900 text-zinc-900 font-medium py-2 px-4 rounded-md"
            >
                CALCULAR PRODUTO
            </button>

            {
                matrix3.length ? (
                    <div className="flex flex-col items-center gap-2 text-2xl font-medium">
                        <p>=</p>

                        <div className={"bg-transparent border-x-2 border-zinc-900 grid gap-1 py-3 px-1 " + colNum[matrix3.length]}>
                            {
                                matrix3.map((row, i) => (
                                    row.map((el, j) => (
                                        <p className="w-10 h-10 flex items-center justify-center">
                                            {el}
                                        </p>
                                    ))
                                ))
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
