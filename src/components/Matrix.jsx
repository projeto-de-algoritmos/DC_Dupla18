import React from "react";
import { InputCell } from "./InputCell";


export function Matrix({
    id,
    matrix,
    updateMatrix,
    disabled = false
}) {

    const colNum = {
        2: 'grid-cols-2',
        4: 'grid-cols-4',
        16: 'grid-cols-16',
        32: 'grid-cols-32',
        64: 'grid-cols-64'
    }

    return (
        <div className={"bg-transparent border-x-2 border-zinc-900 grid gap-1 py-3 px-1 " + colNum[matrix.length]}>
            {
                matrix.map((row, i) => (
                    row.map((col, j) => (
                        <InputCell
                            key={i.toString() + j.toString()}
                            rowIndex={i}
                            colIndex={j}
                            updateMatrix={updateMatrix}
                            disabled={disabled}
                            matrixId={id}
                        />
                    ))
                ))
            }
        </div>
    )
}
