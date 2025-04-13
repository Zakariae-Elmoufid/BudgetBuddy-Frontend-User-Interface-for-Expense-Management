import React , { useState } from "react";

function Count() {
    const [name, setName] = useState("Zakaria");
    return (
        <>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <p>Bonjour, {name} !</p>

        </>
    ) 
}

export default Count;