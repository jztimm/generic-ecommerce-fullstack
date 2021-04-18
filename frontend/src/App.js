import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact/>          {/* to view this screen, must have exact path of "/" */}
          <Route path="/product/:id" component={ProductScreen}/>  {/* /:id is a placeholder for anything after product path */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
