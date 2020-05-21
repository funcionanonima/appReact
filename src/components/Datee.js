import React from 'react';

const Datee = ({date, deleteDate}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{date.pet}</h3>
            <p className="card-text"><span>Nombre Dueño: </span> {date.owner}</p>
            <p className="card-text"><span>Fecha: </span> {date.date}</p>
            <p className="card-text"><span>Hora: </span> {date.hour}</p>

            <button 
                className="btn btn-danger"
                onClick={() => deleteDate(date.id)}
                >
                Borrar &times;
            </button>
        </div>
    </div>
);

export default Datee;