import React from 'react'

function RandomNumbers() {
    let numeros = new Array(30).fill().map(() => Math.random())
    console.log(numeros);
    return (
        <div>
       {numeros.map((numero) => <li>{numero}</li>)}
        </div>
    )
}

export default RandomNumbers