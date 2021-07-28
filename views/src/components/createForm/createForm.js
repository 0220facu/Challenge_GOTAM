import React from 'react' ;
import "./createFormStyles.css"

function createForm(){

    return(
        <div className="FormContainer">
            <form action="/crear" method="post">
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
            </form>
        </div>
    )

}

export default createForm ;