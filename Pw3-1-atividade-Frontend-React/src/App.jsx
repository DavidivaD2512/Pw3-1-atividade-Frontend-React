import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Container from './components/layout/Container';

import Home from './components/pages/Home';
import CreateGame from './components/pages/CreateGame';
import ViewGames from './components/pages/ViewGames';
import Register from './components/pages/Register';
import Detail from './components/pages/DetailGame';
import Delete from './components/pages/DeleteGame';

import NavBar from './components/layout/NavBar';

function App() {

  return (
    <>
    
      <div>

        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />} />
                <Route path='/Games/NewGame' element={<CreateGame />} />
                <Route path='/Games/ViewGames' element={<ViewGames />} />
                <Route path='/User/Register' element={<Register />} />
                <Route path='/Games/Detalhes/:id_jogo' element={<Detail />} />
                <Route path='/Games/deleteGame/:id_jogo' element={<Delete />} />

              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App
