import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Film from './pages/Film/Film';

function App() {
 
  return (
    <div className="App">
     <Header />

     <Routes>
      <Route path="/" element={<Home /> }/>
      <Route path="/:id" element={<Film /> }/>
     </Routes>
    </div>
  );
}

export default App;
