import React from "react";


export function Button({
    value,
    buttonFunction
}) {


    return (
        <button
            onClick={buttonFunction}
            className="bg-zinc-900 text-white text-2xl w-16 h-16 rounded-xl"
        >
            {value}
        </button>
    )
}
