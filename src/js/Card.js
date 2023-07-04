import React from 'react'
import propTypes from 'prop-types'

const Card = (props) => {
    return (
        <>
            <div className="d-inline-flex">
                <div className="card m-4 p-4" style={{ width: "36rem", textAlign: "center" }}>
                    <img className="card-img-top" src={props.imagen}></img>
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo}</h5>
                        <p className="card-text">{props.descripcion}</p>
                        <a href={props.link} className="btn btn-outline-info btn-lg">Buy Game</a>
                    </div>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    titulo: propTypes.string,
    imagen: propTypes.url,
    descripcion: propTypes.string,
    link: propTypes.url
}
export default Card