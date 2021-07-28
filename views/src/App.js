import TopBar from './components/TopBar/TopBar'
import EmployeesList from './components/employees/EmployeesList'
import EmployeeForm from './components/createForm/createForm'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
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
          <EmployeeForm url="http://localhost:3000/api/employees" />
        </Route>
        <Route exact path="/editar/:id">
          <EmployeeForm url="http://localhost:3000/api/edit/:id" />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
 