import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MyArticles from './pages/MyArticles';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sidebar />}>
          <Route index element={<MyArticles />} />
          <Route path='profile' element={<Profile />} />
          <Route path='articles' element={<MyArticles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
