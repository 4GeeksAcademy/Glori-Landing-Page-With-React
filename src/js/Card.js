import React from 'react'
import propTypes from 'prop-types'
import "../styles/index.css";

const cardStyle = {
    width: "20rem",
    textAlign: "center",
    display: "block"
};

const Card = (props) => {
    return (
        <>
            {

                <div className='col-xl-3 col-md-4'>

                    <div className="card m-1 p-2 " style={cardStyle}>
                        <img className="card-img-top" src={props.imagen}></img>
                        <div className="card-body">
                            <h5 className="card-title">{props.titulo}</h5>
                            <p className="card-text">{props.descripcion}</p>
                            <a href={props.link} className="btn btn-outline-info btn-lg">Buy Game</a>
                        </div>

                    </div>
                </div>

            }
        </>
    )
}

Card.propTypes = {
    titulo: propTypes.string,
    imagen: propTypes.string,
    descripcion: propTypes.string,
    link: propTypes.string
}
export default Card