import React from 'react';
import logo from './../../src/dog.jpg';

const Header = (props) => (
    <header>
        <div className="container row">
            <div className="col-6 text-right">
                <img 
                    style={{height:'100px'}}
                    src={logo} 
                    alt="doggie" 
                    className="img-thumbnail"/>
            </div>

            <div className="col-6 my-auto">
                <h1 className="h2">
                    {props.title}
                </h1>
            </div>
        </div>        
    </header>
);

export default Header;
