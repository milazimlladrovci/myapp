
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home'
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPages from './pages/NoPages';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='blogs' element={<Blogs/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='*' element={<NoPages/>} />
        </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
