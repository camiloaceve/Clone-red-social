import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import StyledApp from './components/styled/App.styled'
import GlobalStyle from './components/styled/GlobalStyles'
import { darkTheme } from './themes'
import { BrowserRouter } from 'react-router-dom'
import Signup from './components/signup'
import { UserContext } from './components/UserContex'

function App() {
  const user = useContext(UserContext)
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
          {user?.loggedIn === true ? 'logged in' : <Signup />}
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
