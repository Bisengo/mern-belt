import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import DisplayAll from './components/DisplayAll';
import PetDetail from './components/PetDetail';
import PetForm from './components/PetForm';
import EditPet from './components/EditPet';


function App() {
  return (
    <div className="App">
        <Router>
          <DisplayAll path = "/" />
          <PetForm path = "/new" />
          <PetDetail path = "/pets/:_id"/>
          <EditPet path="/pets/:_id/edit" />
        </Router>
    </div>
  );
}

export default App;
