import React, {Component} from 'react';
import uuid from 'uuid';

const initialState = {
    date : {
        pet : '',
        owner : '',
        date : '',
        hour : ''
    },
    error : false
}

class NewDate extends Component{
    state = {
        ...initialState
    }

    //manejador de eventos para cuando el usuario escribe en los campos
    handleChange = e => {
        // e.target.name para saber de cúal elemento tomas el valor
        // e.target.value para saber cúal es el valor

        // console.log(e.target.name + ': ' + e.target.value);

        //colocar lo que el usuario escribe en el state
        this.setState({
            date : {
                //...spread operator para copia del state a cada cambio
                ...this.state.date,
                [e.target.name] : e.target.value
            }
        })
    }

    //manejador de eventos para envio de formulario
    handleSubmit = e => {
        e.preventDefault();

        //extraer valores del state
        const {pet, owner, date, hour} =this.state.date;

        //validar los campos
        if(pet === '' || owner === '' || date === '' || hour === ''){
            this.setState({
                error: true
            });

            //detener la ejecucion
            return;
        }
        //generar objeto con los datos
        const newDate = {...this.state.date};
        newDate.id = uuid();

        // agregar cita al state de la app
        this.props.createNewDate(newDate);

        //colocar en el staTE   , EL STATE inicial
        this.setState({
            ...initialState
        })
    }


    render(){

        //extraer el valor del error desde el state
        const{error} = this.state;

        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Formulario para citas
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Debes completar todos los campos</div> : null}

                    <form
                        onSubmit={this.handleSubmit}
                    >

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    className="form-control"
                                    name="pet"
                                    placeholder="Mascota" 
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.date.pet}
                                />
                            </div>
                        </div>{/*form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Propietario Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    className="form-control"
                                    name="owner"
                                    placeholder="Propietario Mascota" 
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.date.owner}    
                                />
                            </div>
                        </div>{/*form-group*/}

                        <div className="form-group row">

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha de reserva
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    className="form-control"
                                    name="date"
                                    placeholder="Date" 
                                    type="date"
                                    onChange={this.handleChange}
                                    value={this.state.date.date}
                                />
                            </div>
                        </div>{/*form-group*/}

                        <div className="form-group row">                            

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora de reserva
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    className="form-control"
                                    name="hour"
                                    placeholder="Hour" 
                                    type="time"
                                    onChange={this.handleChange}
                                    value={this.state.date.hour}
                                />
                            </div>
                            
                        </div>{/*form-group*/}

                        <input type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"                            
                        />

                    </form>
                </div>
            </div>
        );
    }
}

export default NewDate;

