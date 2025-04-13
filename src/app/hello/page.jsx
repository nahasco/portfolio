"use client"

import { useState } from "react"

export default function Example() {
    const [state, setSate] = useState(10)

    return (
        <div class="wrapper">
            <div class="counter" style={{ color: "white" }}>
                {state}
            </div>
            <div class="buttons-section">
                <button style={{ color: "black" }} class="add" onClick={() => setSate(state + 1)}>
                    +
                </button>
                <button style={{ color: "black" }} class="minus" onClick={() => setSate(state - 1)}>
                    -
                </button>
            </div>
        </div>
    )
}

