import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import Layout from './components/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import Challenges from './pages/Challenges';
import ChallengeDetail from './pages/ChallengeDetail';
import Resources from './pages/Resources';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:slug" element={<CategoryDetail />} />
            <Route path="/challenges/:category" element={<Challenges />} />
            <Route path="/challenge/:id" element={<ChallengeDetail />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;