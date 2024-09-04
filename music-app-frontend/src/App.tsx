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
                <Route path="/" element={<Songs />} />
                <Route path="/songs/:id" element={<SongDetailsView />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/genres" element={<Genres />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </Provider>
    </>
  )
}

export default App;
