import React, { useState } from "react";


export function InputCell({
    rowIndex,
    colIndex,
    updateMatrix,
    disabled,
    matrixId
}) {
    const [value, setValue] = useState(1);

    const handleUpdateValue = (newValue) => {
        setValue(newValue);
        updateMatrix(matrixId, rowIndex, colIndex, newValue);
    }


    return (
        <input
            className={`bg-opacity-75 outline-none w-8 h-8 text-sm ${disabled ? 'bg-transparent text-center' : 'bg-zinc-200'}`}
            onChange={(e) => handleUpdateValue(e.target.value)}
            value={value}
            type="number"
            disabled={disabled}
        />
    )
}
