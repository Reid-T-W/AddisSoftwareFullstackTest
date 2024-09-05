import './App.css'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Songs from './pages/Songs';
import Albums from './pages/Albums';
import Artists from './pages/Artists';
import Genres from './pages/Genres';
import { Provider } from 'react-redux';
import SongDetailsView from './pages/Songs/SongDetailsView';
import store from './redux/store';
import { ALBUMS_ROUTE, ARTISTS_ROUTE, GENRES_ROUTE, HOME_ROUTE, SONGS_ROUTE } from './utils/constants/routes';

function App() {
  return (
    <>
      <ToastContainer
        closeOnClick
      />
        <Provider store={store}>
          <head>
            <title>{'MusicApp'}</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </head>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path={HOME_ROUTE} element={<Songs />} />
                <Route path={`${SONGS_ROUTE}/:id`} element={<SongDetailsView />} />
                <Route path={ALBUMS_ROUTE} element={<Albums />} />
                <Route path={ARTISTS_ROUTE} element={<Artists />} />
                <Route path={GENRES_ROUTE} element={<Genres />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </Provider>
    </>
  )
}

export default App;
