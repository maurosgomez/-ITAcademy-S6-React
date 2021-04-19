import React from 'react'

function Libro(props) {

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.autor}</p>
        </div>
    )
}

export default Libro