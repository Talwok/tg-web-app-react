import { useEffect } from 'react';
import './App.css';


function App() {
  
  useEffect(() =>
  {
    telegram.ready();
  }, []);


  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
