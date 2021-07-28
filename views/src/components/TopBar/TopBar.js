import React from 'react' ;
import "./topBarStyles.css" ;
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Topbar(){

    return(
        <div class="topBar">
            <Link className="link" to="/">Empleados</Link>
            <Link className="link" to="/crear">Nuevo empleado</Link>
         </div> 	
    );
}

export default Topbar ;