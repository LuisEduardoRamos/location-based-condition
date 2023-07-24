import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Stepper from './components/Stepper';
import ItemInspector from './components/ItemInspector';
import FlawsList from './components/AddedFlaws';
import './styles/global.scss';
import './styles/variables.scss';

function App() {
  return (
    <>
      <Sidebar />
      <section className='content'>
        <Nav />
        <Stepper />
        <div className='inspector-container'>
          <ItemInspector></ItemInspector>
          <FlawsList/>
        </div>
      </section>
    </>
  );
}

export default App;
