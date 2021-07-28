import React from 'react' ;

function employee(props){
        return(
        <article className="item">
           <section className="itemLeft"> 
                <p className="text">Nombre: {props.name}</p>
                <p className="text">Documento: {props.document}</p>
                <p className="text">Nacimiento: {props.birthDate}</p>
                <p className="text">{props.delevoper}</p>
                <p className="text">Area:{props.area}</p>
            </section>
            <section className="itemRight">
                <p className="text">{props.description}</p>
            </section>
        </article>
    );
}
export default employee ;