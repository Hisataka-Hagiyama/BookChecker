import Login from './Login';
import Menu from './Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Menu" element={< Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
