import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar'
import 'semantic-ui-css/semantic.min.css'
import paintingArray from './paintings-array'
import PaintingInfo from './paintingInfo';

function App() {
  console.log(paintingArray)
  return (
    <div>
      <NavBar color="red" icon="paint brush" text="Paint-App" />
      {/* {paintingArray.map(painting => {
        return <PaintingInfo />
        }
      )} */}
      {paintingArray.map(painting => <PaintingInfo painting={painting} />)}
    </div>
  );
}

export default App;
