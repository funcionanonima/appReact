import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewDate from './components/NewDate';
import DatesList from './components/DatesList';

class App extends Component{
  state={
    dates : []
  }

  createNewDate = data => {
    //copiar state actual
    const dates = [...this.state.dates, data];

    //agregar nuevo state
    this.setState({
      dates
    })
  }

  //eliminar las citas del state
  deleteDate = id => {
    //tomar copia del state
    const actualDates = [...this.state.dates];

    //usar filter para sacar el elemento @id del arreglo
    const dates = actualDates.filter(date => date.id !== id)

    //actualizar el state
    this.setState({
      dates
    })
  }

  render(){
    return( 
      <div className="container">
        <Header 
          title="Formulario"
        />
        <div className="row">

          <div className="col-md-10 mx-auto">
            <NewDate 
              createNewDate={this.createNewDate}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <DatesList 
              dates = {this.state.dates}
              deleteDate = {this.deleteDate}
            />
          </div>

        </div>        
      </div>
    );
  }
}

export default App;
