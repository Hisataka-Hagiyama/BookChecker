import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Common from "./Common"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Common />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
