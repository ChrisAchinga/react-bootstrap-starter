import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// page components
import Menu from './components/Menu'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <Menu />
      <main>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
