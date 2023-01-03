import React, { useState } from "react";
import { Matrix } from "../components/Matrix";
import { Button } from "../components/Button";


export function MainPage() {
    const [matrix1, setMatrix1] = useState([]);
    const [matrix2, setMatrix2] = useState([]);
    const [matrix3, setMatrix3] = useState([]);


    const handleCreateMatrix = (size) => {
        setMatrix1(Array.from({ length: size }, () => (
            Array.from({ length: size }, () => 1)
        )));

        setMatrix2(Array.from({ length: size }, () => (
            Array.from({ length: size }, () => 1)
        )));

        setMatrix3([]);
    }

    const handleUpdateMatrixValue = (matrixId, rowIndex, colIndex, value) => {
        let newMatrix = matrixId == 1 ? matrix1 : matrix2;
        newMatrix[rowIndex][colIndex] = parseInt(value);

        if (matrixId == 1) setMatrix1(newMatrix);
        else setMatrix2(newMatrix);

        setMatrix3([]);
    }


    return (
        <div className="h-screen w-full flex flex-col items-center justify-start gap-6 text-xl text-zinc-900">
            <div className="bg-zinc-900 w-full h-24 flex items-center justify-center text-4xl font-bold">
                <h1 className="text-white">
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

                {/* <Button value={32} buttonFunction={() => handleCreateMatrix(32)} />

                <Button value={64} buttonFunction={() => handleCreateMatrix(64)} /> */}
            </div>

            {
                matrix1.length && matrix2.length ? (
                    <div className="flex items-center gap-10 text-2xl font-medium">
                        <Matrix matrix={matrix1} id={1} updateMatrix={handleUpdateMatrixValue} />

                        <p>X</p>

                        <Matrix matrix={matrix2} id={2} updateMatrix={handleUpdateMatrixValue} />
                    </div>
                ) : null
            }

            {
                matrix3.length ? (
                    <div className="flex flex-col items-center gap-2 text-2xl font-medium">
                        <p>=</p>
                        <Matrix matrix={matrix3} disabled />
                    </div>
                ) : null
            }


            <button
                onClick={() => console.log(matrix1, matrix2)}
                className="bg-zinc-900 text-lime-100 py-2 px-4 rounded-md"
            >
                LOG
            </button>
        </div>
    )
}
