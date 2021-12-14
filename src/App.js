import './App.css';
import GlobalcontextProvider from './context/GlobalContextProvider';
import Intermediathooks from './components/IntermediatHooks';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicHooks from './components/BasicHooks'
import Navigat from './components/Navigat';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalcontextProvider>
        <div className='App'>
          <Navigat />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='basic' element={<BasicHooks />} />
            <Route path='inter' element={<Intermediathooks />} />
          </Routes>
        </div>
      </GlobalcontextProvider>
    </BrowserRouter>
  );
};

export default App;
