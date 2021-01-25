import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search city="Napoli" />
        <p>city</p>
        <p>temp</p>
        <p>icon + description</p>
        <p>time</p>
        <p>forecast</p>
      </header>
    </div>
  );
}

export default App;
