import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import {Header} from "./components/header"
import GlobalStyle from "./styles/Globalstyles"
import {Register} from "./pages/cadastro/anamnese"
import {RegisterPersonal} from "./pages/cadastro/personal"
import {Check} from "./components/checks"
import {Nav} from "./pages/home"
import {Profile} from "./pages/profile"
import {Login} from "./pages/login"
import {Map}from "./pages/map"
import {Menu} from "./components/menu"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {ContextMenu} from "./context/menuContext"
import {ContextHeader} from "./context/headerContext"

function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <ContextMenu>
          <ContextHeader>
            <Menu/>
            <Header/>
            <Routes>
              <Route path='/' Component={Login}/>
              <Route path='/profile' Component={Profile}/>
              <Route path='/map' Component={Map}/>
              <Route path='/anamnese' Component={Register}/>
              <Route path='/personal' Component={RegisterPersonal}/>
            </Routes>
          </ContextHeader>
        </ContextMenu>
    </ThemeProvider>
    </Router>
  
  )
}

export default App
