import React,  { Component } from 'react' ;
import "./createFormStyles.css"

const url ="http://localhost:3000/api/areas"

class createForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
                areas:[]
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

        this.apiCall(url , this.setAreas)
    }

    setAreas = (data) =>{
        this.setState({
               areas: data.Areas
        })

}

    render() {
        console.log(this.context)
        let areas;

        areas = this.state.areas
        
        let url;
       // url = this.props.params.id? this.props.url + this.props.params : this.props.url
        
        return(
            <div className="FormContainer">
                <form action={this.props.url}method="POST">
                    <div className="row">
                        <div className="col-25">
                            <label for="Name">Nombre Completo</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="Name" name="Name" placeholder="ej.Carlos Jose Perez"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="document">Documento</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="document" name="document" placeholder="ej.12345678"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="birthDate">Fecha de nacimiento</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="birthDate" name="birthDate"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="subject">descripción</label>
                        </div>
                        <div className="col-75">
                            <textarea id="descripción" name="description" placeholder="Breve descripción del empleado"></textarea>
                        </div>
                    </div>
                    <div className="row">
                            <label for="Dev_cbox">EL empleado es desarrollador</label>
                            <input type="checkbox" id="Dev_cbox" name="Dev_cbox"value="Dev"/> 
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="area">elija area del empleado</label>
                        </div>
                        <div class="col-75">
                            <select id="area" name="area">
                                {areas.map(area => <option value={area.id}>{area.area_name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <input type="submit" value="Submit"/>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default createForm ;