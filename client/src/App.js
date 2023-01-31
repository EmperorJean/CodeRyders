import './App.css';

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <h1> Code Ryders </h1>
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

export default App;
