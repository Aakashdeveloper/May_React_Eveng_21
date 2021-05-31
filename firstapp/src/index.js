import React from 'react';
import ReactDOM from 'react-dom';
// var React = require('react');
//function App(){}

const App = () => {
    return (
        <div>
            <h1>Hi to React</h1>
            <h2>My App</h2>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));