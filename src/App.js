import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import main from './components/main/main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={main} />
      </Switch>
    </Router>
  );
}

export default App;
