import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';


function App() {
  
  const{telegram, onToggleButton} = useTelegram();

  useEffect(() =>
  {
    telegram.ready();
  }, []);


  return (
    <div className="App">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
