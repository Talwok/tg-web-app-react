import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

function App() {
  
  const{telegram, onToggleButton} = useTelegram();

  useEffect(() =>
  {
    telegram.ready();
  }, []);

  return (
    <div className="App">
      <Header/>
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
