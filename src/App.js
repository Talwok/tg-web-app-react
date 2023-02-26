import { useEffect } from 'react';
import './App.css';


function App() {
  
  useEffect(() =>
  {
    telegram.ready();
  }, []);


  return (
    <div className="App">
    </div>
  );
}

export default App;
