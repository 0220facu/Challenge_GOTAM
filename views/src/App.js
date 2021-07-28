import TopBar from './components/TopBar/TopBar'
import EmployeesList from './components/employees/EmployeesList'
import CreateForm from './components/createForm/createForm.js'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
  <Router>
    <div className="App">
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <EmployeesList/>
        </Route>
        <Route exact path="/crear">
          <CreateForm/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
 