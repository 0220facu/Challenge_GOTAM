import React, { Component }from 'react' ;
import { Link } from "react-router-dom";
class employee extends Component{
    
    render() {
        return(
        <article className="item">
           <section className="itemLeft"> 
                <p className="text">Nombre: {this.props.name}</p>
                <p className="text">Documento: {this.props.document}</p>
                <p className="text">Nacimiento: {this.props.birthDate}</p>
                <p className="text">{this.props.delevoper}</p>
                <p className="text">Area:{this.props.area}</p>
            </section>
            <section  className="itemRight">
                <p className="text">{this.props.description}</p>
                <form action={"http://localhost:3000/api/employees/"+ this.props.id} method="post" >
                    <button type="submit"  className="eliminar">ELIMINAR</button>
                </form>
            </section>
        </article>
    );
}
}
export default employee ;