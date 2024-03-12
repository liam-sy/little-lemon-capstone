import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage.js'
import BookingPage from './components/pages/BookingPage.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;