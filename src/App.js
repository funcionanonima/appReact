import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewDate from './components/NewDate';


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
        </div>        
      </div>
    );
  }
}

export default App;
