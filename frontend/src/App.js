import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import loginScreen from './screens/loginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/shipping" component={ShippingScreen}/>  {/* Redirects you to the login page*/}
          <Route path="/login" component={loginScreen}/>  {/* Redirects you to the login page*/}
          <Route path="/register" component={RegisterScreen}/>  {/* Redirects you to the login page*/}
          <Route path="/profile" component={ProfileScreen}/> {/* Redirects you to the login page*/}
          <Route path="/product/:id" component={ProductScreen}/>  {/* /:id is a placeholder for anything after product path */}
          <Route path="/cart/:id?" component={CartScreen}/>  {/* /cart is the path and /:id? is a optional */}
          <Route path="/" component={HomeScreen} exact/>          {/* to view this screen, must have exact path of "/" */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
