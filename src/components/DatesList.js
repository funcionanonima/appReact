import React from 'react';
import Datee from './Datee';

const DatesList = ({dates, deleteDate}) => (
    <div className="card mt-2 py-5">
        <h2 className="card-title text-center">
            Administra tus citas
        </h2>
        <div className="card-body">
            
            <div className="lista-citas">
                {dates.map(date=>(
                    <Datee
                        key={date.id}
                        date={date}
                        deleteDate={deleteDate}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default DatesList;