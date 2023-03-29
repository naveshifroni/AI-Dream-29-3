import { useEffect } from "react";
import design from './App.module.scss'

import { Route, Routes} from 'react-router-dom'
import EditCard from './pages/edit-card/EditCard';
import CardDetails from './pages/card-details/CardDetails';
import Topnav from './components/topnav/Topnav';
import Home from './components/home/Home';
import CardList from './pages/card-list/CardList';
import NewsView from './routes/news/NewsView';
import { fetchNews } from "./features/news/newsSlice";
import { useAppDispatch } from "./app/hooks";
import NewsDetailsView from "./routes/news-details/NewsDetailsView";
import FavoritesView from "./routes/favorites/FavoritesView";
import Footer from './components/footer/Footer'



function App() {
   const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);


  return (
    <div className={design.site}>
    <Topnav/>
    <Routes>
    <Route path="/news" element={<NewsView />} />
    <Route path="/news/:id" element={<NewsDetailsView />} />
    <Route path="/favorites" element={<FavoritesView />} />
    <Route path='/' element={<Home/>}/>
    <Route path='/ainews' element={<Home/>}/>
    <Route path='/bots' element={<CardList/>}/>
    <Route path='/cards/edit/:id' element={<EditCard/>}/>
    <Route path='/cards/details/:id' element={<CardDetails/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
