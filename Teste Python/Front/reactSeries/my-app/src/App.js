import './App.css';
import Navbar from './componet/navbar';
import Home from './componet/Home';
import { Switch, Route } from 'react-router-dom'
import Products from './componet/Products';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" componet={Home} />
        <Route exact path="/products" componet={Products} />
        <Route exact path="/products/:id" componet={Product} />
      </Switch>
    </>
  );
}

export default App;
