// import logo from './logo.svg';
import { Route ,Switch } from 'react-router-dom';
import './App.css';
import './styles/styles.scss'
import {Home} from './page/Home'
function App() {
  return (
    <div className="App">
      <Switch>
       <Route path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
