import React, { Component } from 'react' ;
import "./employees.css" ;
import Employee from './employeeItem'

const url ="http://localhost:3000/api/employees"

class employeesList extends Component {

        constructor(props) {
                super(props);
                this.state = {
                        employees:[]
                }
        }

        

        apiCall(url,handler){
                fetch(url)
                        .then( response => response.json())
                        .then(data => handler(data))
                        .catch(err => console.log(err))
        }


        componentDidMount() {
                console.log("assembled component");

                this.apiCall(url , this.setEmployees)
        }

        setEmployees = (data) =>{
                this.setState({
                       employees: data.employees
                })
                console.log(this.state.employees)
        }

        render() {

                let employees;

                employees = this.state.employees

                
                return(
                        <main className="employeesConteiner">
                               {employees.map(employee => <Employee 
                               name={employee.full_name} 
                               document={employee.identification_document} 
                               birthDate={employee.birth_date} 
                               delevoper={employee.delevoper == 1? "desarrollador" : "no desarrollador"}
                               description={employee.description}
                               area={employee.area.area_name}
                               />)}
                        </main>
                    );
        }
       
}
export default employeesList ;