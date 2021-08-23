import React, {useEffect} from 'react';
import './App.css';
import DataProvider from './DataProvider';
import Display from './Display';
import Edit from './Edit';

function App() {
  useEffect(() => {
    console.log('%cApp render', 'font-size: 20px')
  }, [])

  return (
    <div className="provider-poc">
      <DataProvider>
        <Edit />
        <Display />
      </DataProvider>
    </div>
  );
}

export default App;
