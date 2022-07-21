import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route,BrowserRouter as Router , Routes} from 'react-router-dom'
import App from './App';
import AboutMovie from './aboutMovie';
import FavoriteMovie from './FavoriteMovie';

const routs = (
  <Router>
     <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/movie/:id" element={<AboutMovie/>}></Route>
        <Route path="/fav" element={<FavoriteMovie/>}></Route>
     </Routes>
  </Router>
);
ReactDOM.render(routs, document.getElementById('root'));