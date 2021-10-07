// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <>
    <Switch>
      <Route path="/" exact={true}>
        <Home home={true} />
      </Route>
      <Route path="/listOf" exact={true}>
        <Home home={false} />
      </Route>

      <Route component={Home} />
    </Switch>
    </>
  );
}

export default App;
