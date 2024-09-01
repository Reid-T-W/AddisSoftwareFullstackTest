import './App.css'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
// import { Provider } from 'react-redux';
import Layout from './components/Layout';
import Songs from './pages/Songs';
import Albums from './pages/Albums';
import Artists from './pages/Artists';
import Genres from './pages/Genres';
import { Provider } from 'react-redux';
import SongDetailsView from './pages/Songs/SongDetailsView';
import store from './redux/store';

const theme = {
  colors: {
    primary: '242424',
    secondary: 'gray',
  },
  space: [0, 4, 8, 16, 32, 64],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
};


function App() {

  return (
    <>
      <ToastContainer />
        <Provider store={store}>
          <head>
            <title>{'MusicApp'}</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </head>
          <ThemeProvider theme={theme}>
          {/* <GlobalStyle /> */}
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
                {/* <redirect to="/404" /> */}
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
    </>
  )
}

export default App;
