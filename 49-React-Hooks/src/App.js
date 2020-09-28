import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import Counter from './Counter';
import Task from './Task';
import Data from './data';


function App() {
  return (
        <div>
            <Counter />
            <Data />
            {/* <Task /> */}
        </div>
  );
}

export default App;
