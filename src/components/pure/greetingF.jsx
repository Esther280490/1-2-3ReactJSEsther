import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    
    //Breve introducción a useState
    //const [variable,método para actualizarlo]=useState(valor inicial)
    const [age,setage] = useState(29)

    const birthday =()=>{
        //actualizamos el State
        setage(age+1);
    }
    
    return (
        <div>
        <h1>
            ¡HOLA{props.name} desde componente funcional!
        </h1>
        <h2>
                    Tu edad es de: {this.state.age}
        </h2> 
        <div>
            <button onClick={this.birthday}>
                Cumplir años
            </button>
        </div>
    </div>
    );
};


GreetingF.propTypes = {
    name:PropTypes.string

};


export default GreetingF;
