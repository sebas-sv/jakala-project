import { HashRouter, Route, Routes } from "react-router-dom";

import List from './views/List'
import Detail from './views/Detail'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/home" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
