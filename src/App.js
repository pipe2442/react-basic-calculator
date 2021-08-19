import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Error from './components/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
