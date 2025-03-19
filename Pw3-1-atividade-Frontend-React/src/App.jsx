import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Container from './components/layout/Container'

import Home from './components/pages/Home'
import CreateGame from './components/pages/CreateGame'
import ViewGames from './components/pages/ViewGames'
import SingIn from './components/pages/SingIn'

import NavBar from './components/layout/NavBar'

function App() {

  return (
    <>
    
      <div>

        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />} />
                <Route path='/newGame' element={<CreateGame />} />
                <Route path='/viewGames' element={<ViewGames />} />
                <Route path='/singIn' element={<SingIn />} />

              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App
