import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './Components/AppContainer/AppContainer';

function App() {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
}

export default App;
