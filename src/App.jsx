import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Layout from './layouts/Layout/Layout';
import ScrollToTop from './utils/ScrollToTheTop';
import Holidaze from "./pages/Holidaze/Holidaze";
import Auction from './pages/Auction/Auction';
import Gamehub from './pages/Gamehub/Gamehub';
import Nstore from './pages/Nstore/Nstore';
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Layout>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/holidaze' element={<Holidaze />} />
          <Route path='/portfolio/nstore' element={<Nstore />} />
          <Route path='/portfolio/auction' element={<Auction />} />
          <Route path='/portfolio/gamehub' element={<Gamehub />} />
          <Route path='/portfolio/nstore' element={<Nstore />} />
          <Route path='/auction' element={<Auction />} />
          <Route path='/holidaze' element={<Holidaze />} />
          <Route path='/gamehub' element={<Gamehub />} />
          <Route path='/nstore' element={<Nstore />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </Layout>
  );
};

export default App;
