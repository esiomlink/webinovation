import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BasicHooks from './components/BasicHooks';
import GlobalcontextProvider  from './context/GlobalContextProvider';
import Intermediathooks from './components/IntermediatHooks';
import Home from './components/Home';

const App = () => {
  return (
    <GlobalcontextProvider>
      <div className='App'>
        <Home />
        <BasicHooks />
        <Intermediathooks />
      </div>
    </GlobalcontextProvider>
  );
};

export default App;
