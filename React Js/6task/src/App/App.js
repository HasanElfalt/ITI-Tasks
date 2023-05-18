import './App.css';
import NavBar from '../Components/NavBar';
import { Route, Routes } from 'react-router';
import NotFound from '../Pages/NotFoundPage';
import Home from '../Pages/HomePage';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SimpleBackdrop from '../Components/BackDrop';
import MovieModule from "../Modules/MovieModule";
import { Provider } from 'react-redux';
import { store } from '../Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Suspense fallback={<SimpleBackdrop></SimpleBackdrop>}>
          <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="Movies/*" element={<MovieModule></MovieModule>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </Provider>
  );
}



export default App;
