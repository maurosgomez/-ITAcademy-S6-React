import React from 'react'

function Libro(props) {

    return (
        <div>
            <h3>{props.titulo}</h3>
            <p>{props.autor}</p>
        </div>
    )
}

export default Libro
